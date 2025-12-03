import type { BudgetData, BudgetDataProvider } from './BudgetDataManager.types';

class BudgetDataManager {
  private provider: BudgetDataProvider

  constructor(provider: BudgetDataProvider) {
    this.provider = provider;
  }

  saveBudget(data: BudgetData) {
    this.provider.saveBudget(data);
  }

  getBudgets() {
    return this.provider.getBudgets();
  }
}

export default BudgetDataManager;