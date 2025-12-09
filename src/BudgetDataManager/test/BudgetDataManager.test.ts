import { describe, it, expect, vi } from 'vitest';
import BudgetDataManager from '../BudgetDataManager';
import budgetsData from './budgets.json';

const MemoryMockProvider = {
  getBudgets: vi.fn().mockReturnValue(budgetsData),
  getBudget: vi.fn().mockReturnValue(budgetsData[0]),
  saveBudget: vi.fn()
}

describe('BudgetDataManager', () => {
  describe('BudgetDataManager get/set methods', () => {
    it('returns all the budgets calling getBudgets', () => {
      const dataManager = new BudgetDataManager(MemoryMockProvider);
      const returnedData = dataManager.getBudgets();

      expect(MemoryMockProvider.getBudgets).toHaveBeenCalled();
      expect(returnedData).toStrictEqual(budgetsData);
    });

    it('returns a budgets calling getBudget', () => {
      const dataManager = new BudgetDataManager(MemoryMockProvider);
      const returnedData = dataManager.getBudget(1234);

      expect(returnedData).toStrictEqual(budgetsData[0]);
    });

    it('sets a budget calling setBudget', () => {
      const dataManager = new BudgetDataManager(MemoryMockProvider);
      
      dataManager.saveBudget(budgetsData[0]);

      expect(MemoryMockProvider.saveBudget).toHaveBeenCalledWith(budgetsData[0]);
    });
  });
});