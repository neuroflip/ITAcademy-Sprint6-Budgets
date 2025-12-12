import type { BudgetData, BudgetDataProvider } from "../BudgetDataManager.types";
import {v4 as uuidv4} from 'uuid';

const LOCALSTORAGEKEY = 'budgets';

const getDataUID = () => {
  return uuidv4();
}

class LocalStorageProvider implements BudgetDataProvider {
  getBudgets() {
    try {
      const dataArray =  JSON.parse(localStorage.getItem(LOCALSTORAGEKEY) || '[]');
        return dataArray || [];
    } catch(error) {
      throw new Error(`Budgets data cannot be loaded: ${error}`);
    }
  }

  getBudget(id: string) {
    const dataArray =  this.getBudgets();
    const data = dataArray.find((element: BudgetData) => element.id === id)
    
    return data;
  }

  saveBudget(data: BudgetData) {
    try {
      const previousBudgets = this.getBudgets();

      data.id = getDataUID();
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
export { LOCALSTORAGEKEY };