
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import BudgetsManager from '../../budgetsManagement/BudgetsManager/BudgetsManager';
import { LOCALSTORAGEKEY } from '../../../BudgetDataManager/providers/LocalStorageProvider';
import localStorageData from './localStorageMockData.json';
import type { BudgetData } from '../../../BudgetDataManager/BudgetDataManager.types';
import type { OrderIndex } from '../BudgetListOrder/BudgetListOrder.types';

const newBudget = {
  "date": "2025-10-00T00:39:00.000Z",
  "name": "New Item",
  "telephone": "23435345",
  "email": "newitem@gmail.com",
  "services": [{
    "id": 0,
    "isChecked": true,
    "title": "Web",
    "description": "Development of a complet responsive web development",
    "cost": 500,
    "extras": [
      { "id": 0, "text": "Pages number", "value": 1 },
      { "id": 1, "text": "Languages number", "value": 3 }
    ]
  }],
  "totalCost": 240,
  "id": "1234"
};

const orderFunc = (order: OrderIndex) => (a:BudgetData, b:BudgetData) => {
      return (a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0)
    }

describe('Budget ordering flow', () => {
  beforeEach(() => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localStorageData));
  });

  afterEach(() => {
    localStorage.removeItem(LOCALSTORAGEKEY);
  });

  it('orders by date', () => {
    const localData:Array<BudgetData> = [...localStorageData];

    localData.push(newBudget);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localData));
    render(<BudgetsManager />);
    const dateOrderElement = screen.getByRole("button", { name: "Date ^" });

    act(() => {
      fireEvent.click(dateOrderElement);
    });
    localData.sort(orderFunc("date"));
    const budgets = screen.getAllByRole("article");

    for (let i = 0; i < localData.length; i++) {
      expect(budgets[i].getElementsByTagName("h1")[0].textContent).toBe(localData[i].name);
    }
  });

  it('orders by name', () => {
    const localData: Array<BudgetData> = [...localStorageData];

    localData.push(newBudget);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localData));

    render(<BudgetsManager />);

    const nameOrderElement = screen.getByRole("button", { name: "Name" });
    act(() => {
      fireEvent.click(nameOrderElement);
    });
    localData.sort(orderFunc("name"));
    const budgets = screen.getAllByRole("article");

    for (let i = 0; i < localData.length; i++) {
      expect(budgets[i].getElementsByTagName("h1")[0].textContent).toBe(localData[i].name);
    }
  });

  it('orders by price', () => {
    const localData: Array<BudgetData> = [...localStorageData];
    localData.push(newBudget);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localData));

    render(<BudgetsManager />);

    const nameOrderElement = screen.getByRole("button", { name: "Price" });
    act(() => {
      fireEvent.click(nameOrderElement);
    });
    localData.sort(orderFunc("totalCost"));
    const budgets = screen.getAllByRole("article");

    for (let i = 0; i < localData.length; i++) {
      expect(budgets[i].getElementsByTagName("h1")[0].textContent).toBe(localData[i].name);
    }
  });
});