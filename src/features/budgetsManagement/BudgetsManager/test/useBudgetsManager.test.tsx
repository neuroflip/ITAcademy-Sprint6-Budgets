import { describe, it, vi, expect, beforeEach } from 'vitest';
import { act, renderHook, waitFor } from '@testing-library/react';
import budgetsServiceData from '../budget.config.json';
import useBudgetsManager from '../hooks/useBudgetsManager';

vi.mock('../../../../BudgetDataManager/BudgetDataManager', () => {
  const getBudgetMock = vi.fn();
  const saveBudgetMock = vi.fn();

  class BudgetDataManagerMock {
    getBudget = getBudgetMock;

    getBudgets = vi.fn().mockReturnValue([
      {
        id: 0,
        date: "date0",
        name: "budgetData0",
        telephone: "telephone budgetData0",
        email: "email budgetData0",
        totalCost: 1333,
        services: []
      },
      {
        id: 1,
        date: "date1",
        name: "budgetData1",
        telephone: "telephone budgetData1",
        email: "email budgetData1",
        totalCost: 33,
        services: []
      }
    ]);

    saveBudget = saveBudgetMock;
  }

  return {
    default: BudgetDataManagerMock,
    mocks: { getBudgets: getBudgetMock, saveBudget: saveBudgetMock }
  };
});

import * as BudgetDataManagerMocked from '../../../../BudgetDataManager/BudgetDataManager';

describe('useBudgetsManager', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  });

  it('returns the budgetsServices that are the ones from the data json', () => {
    const { result } = renderHook(() => useBudgetsManager());
    const budgetServices = result.current[0];

    expect(budgetServices).toStrictEqual(budgetsServiceData);
  });

  it('returns the totalBudgets that are the ones returned by the data manager', () => {
    const { result } = renderHook(() => useBudgetsManager());
    const totalBudgets = result.current[1];

    expect(totalBudgets).toStrictEqual([{
      id: 0,
      date: "date0",
      name: "budgetData0",
      telephone: "telephone budgetData0",
      email: "email budgetData0",
      totalCost: 1333,
      services: []
    },
    {
      id: 1,
      date: "date1",
      name: "budgetData1",
      telephone: "telephone budgetData1",
      email: "email budgetData1",
      totalCost: 33,
      services: []
    }]);
  });

  it ('returns 0 at total calculated cost from services it there are no checked ones', () => {
    const { result } = renderHook(() => useBudgetsManager());
    const calculatedTotalCost = result.current[2];

    expect(calculatedTotalCost).toBe(0);
  });

  it ('sets initially the discount switch to off', () => {
    const { result } = renderHook(() => useBudgetsManager());
    const calculatedTotalCost = result.current[3];

    expect(calculatedTotalCost).toBe(false);
  });

  it ('recalculates total cost adding a new budget', () => {
    const { result } = renderHook(() => useBudgetsManager());
    const onChangeBudget = result.current[4];

    act(() => {
      onChangeBudget({
        id: 33,
        cost: 1000,
        extras: [{
          id: 0,
          text: "extra text",
          value: 5
        }],
        isChecked: true,
        title: "New budget",
        description: "description new budget"
      });
    });

    const calculatedTotalCost = result.current[2];
    expect(calculatedTotalCost).toBe(1150);
  });

  it('saves a new budget and restores calculated total cost adding a new budget', async () => {
    const { result } = renderHook(() => useBudgetsManager());

    const onChangeBudget = result.current[4];
    const onBudgetCreation = result.current[5];

    const date = new Date(2000, 1, 1, 1);
    vi.setSystemTime(date);

    act(() => {
      onChangeBudget({
        id: 0,
        cost: 1000,
        extras: [{
          id: 0,
          text: "extra text",
          value: 5
        }],
        isChecked: true,
        title: "New service",
        description: "description new service"
      });
    });

    waitFor(() => {
      expect(result.current[0][0].isChecked).toBe(true);
    });

    act(() => {
      onBudgetCreation({
        name: "name new budget",
        telephone: "234235252",
        email: "email@email.com"
      });
    });

    waitFor(() => {
      expect(
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        (BudgetDataManagerMocked as any).mocks.saveBudget).toHaveBeenCalledWith(({
          date: "2000-02-01T00:00:00.000Z",
          name: "name new budget",
          telephone: "234235252",
          email: "email@email.com",
          services: [{
            "cost": 500,
            "description": "Development of a complet responsive web development",
            "extras": [{
              "id": 0,
              "text": "Pages number",
              "value": 1 
            },{
              "id": 1,
              "text": "Languages number",
              "value": 1,
            }],
            "id": 0,
            "isChecked": false,
            "title": "Web",
          }, {
            "cost": 300,
            "description": "Development, analisys and Seo optimization of a complete website",
            "extras": null,
            "id": 1,
            "isChecked": false,
            "title": "Seo",
          }, {
            "cost": 400,
            "description": "Development and ads provider integration in a website",
            "extras": null,
            "id": 2,
            "isChecked": false,
            "title": "Ads",
          }],
          totalCost: 1150
        }));
    });
  });
});