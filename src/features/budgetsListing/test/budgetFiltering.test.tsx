
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import BudgetsManager from '../../budgetsManagement/BudgetsManager/BudgetsManager';
import { LOCALSTORAGEKEY } from '../../../BudgetDataManager/providers/LocalStorageProvider';
import localStorageData from './localStorageMockData.json';

describe('Budget Filtering flow', () => {
  beforeEach(() => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localStorageData));
  });

  afterEach(() => {
    localStorage.removeItem(LOCALSTORAGEKEY);
  });

  it('filters with 1 result', () => {
    render(<BudgetsManager />);
    const inputFilter = screen.getByRole("textbox");

    act(() => {
      fireEvent.change(inputFilter, {target: {value: 'Jo'}})
    })
    const budgets = screen.getAllByRole("article");

    expect(budgets.length).toBe(1);
    for (let i=0; i<budgets.length - 1; i++) {
      expect(budgets[i].getElementsByTagName("h1")[0].textContent.indexOf('Jo')).toBe(0);
    }
  });

  it('filters with several result', () => {
    render(<BudgetsManager />);
    const inputFilter = screen.getByRole("textbox");

    act(() => {
      fireEvent.change(inputFilter, {target: {value: 'To'}})
    })
    const budgets = screen.getAllByRole("article");

    expect(budgets.length).toBe(2);
    for (let i=0; i<budgets.length - 1; i++) {
      expect(budgets[i].getElementsByTagName("h1")[0].textContent.indexOf('To')).toBe(0);
    }
  });

  it('filters with no results', () => {
    render(<BudgetsManager />);
    const inputFilter = screen.getByRole("textbox");

    act(() => {
      fireEvent.change(inputFilter, {target: {value: 'We'}})
    })
    const budgets = screen.queryAllByRole("article");

    expect(budgets.length).toBe(0);
    expect(screen.getByText("There aren't ongoing budgets")).toBeInTheDocument();
  });
});