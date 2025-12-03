import type { BudgetData, BudgetDataProvider } from "../BudgetDataManager.types";

const LOCALSTORAGEKEY = 'budgets';

class LocalStorageProvider implements BudgetDataProvider {
  getBudgets() {
    try {
      const dataArray =  JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) || '[]');
        return dataArray || [];
    } catch(error) {
      throw new Error(`Budgets data cannot be loaded: ${error}`);
    }
  }

  saveBudget(data: BudgetData) {
    try {
      const previousBudgets = this.getBudgets();

      if (previousBudgets) {
        previousBudgets.push(data);
        localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(previousBudgets));
      }
    } catch(error) {
      throw new Error(`Budgets data cannot be saved now: ${error}`);
    }
  }
}

export default LocalStorageProvider;