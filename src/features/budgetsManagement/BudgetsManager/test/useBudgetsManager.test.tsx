import { describe, it, vi, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import budgetsServiceData from '../budget.config.json';
import useBudgetsManager from '../hooks/useBudgetsManager';

//[budgetServices, totalBudgets, calculatedTotalCost, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch]

vi.mock('../helpers/utils', () => ({
    initValues: vi.fn().mockReturnValue(budgetsServiceData),
    calculateTotalCost: vi.fn().mockReturnValue(1111)
}));

vi.mock('../../../../BudgetDataManager/BudgetDataManager', () => {
  class BudgetDataManagerMock {
    getBudget = vi.fn();

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

    saveBudget = vi.fn();
  }

  return {
    default: BudgetDataManagerMock
  };
});

describe('useBudgetsManager', () => {
  describe('useBudgetsManager validations', () => {
    it('the budgetsServices is the one from the data json', () => {
      const { result } = renderHook(() => useBudgetsManager());
      const budgetServices = result.current[0];

      expect(budgetServices).toStrictEqual(budgetsServiceData);
    });

    it('the totalBudgets is the one returned by the data manager', () => {
      const { result } = renderHook(() => useBudgetsManager());
      const totalBudgets = result.current[1];

      expect(totalBudgets).toStrictEqual([
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
    });
  });
});