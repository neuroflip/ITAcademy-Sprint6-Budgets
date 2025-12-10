
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BudgetsManager from '../../budgetsManagement/BudgetsManager/BudgetsManager';
import { LOCALSTORAGEKEY } from '../../../BudgetDataManager/providers/LocalStorageProvider';
import localStorageData from './localStorageMockData.json';

describe('Budget listing flow', () => {
  it('shows a message when there is no budgets in the list', () => {
    render(<BudgetsManager />);
    
    expect(screen.getByText("There aren't ongoing budgets")).toBeInTheDocument();
  });

  it('shows all the budgets saved in the list', () => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(localStorageData));
    render(<BudgetsManager />);
    
    for (let i=0; i<localStorageData.length; i++) {
      expect(screen.getByText(localStorageData[i].name)).toBeInTheDocument();
      expect(screen.getByText(localStorageData[i].email)).toBeInTheDocument();
      expect(screen.getByText(localStorageData[i].telephone)).toBeInTheDocument();
      expect(screen.getByText(localStorageData[i].totalCost)).toBeInTheDocument();
    }
    expect(screen.queryByText("There aren't ongoing budgets")).not.toBeInTheDocument();

    localStorage.removeItem(LOCALSTORAGEKEY);
  });
});