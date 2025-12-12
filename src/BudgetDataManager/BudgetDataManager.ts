import type { BudgetData, BudgetDataProvider } from './BudgetDataManager.types';

class BudgetDataManager {
  private provider: BudgetDataProvider

  constructor(provider: BudgetDataProvider) {
    this.provider = provider;
  }

  getBudget(id: string) {
    return this.provider.getBudget(id);
  }

  saveBudget(data: BudgetData) {
    this.provider.saveBudget(data);
  }

  getBudgets() {
    return this.provider.getBudgets();
  }
}

export default BudgetDataManager;