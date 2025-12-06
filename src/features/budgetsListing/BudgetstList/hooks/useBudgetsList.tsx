import * as React from "react";
import BudgetDataManager from "../../../../BudgetDataManager/BudgetDataManager";
import LocalStorageProvider from "../../../../BudgetDataManager/providers/LocalStorageProvider";

import type { BudgetData } from "../../../../BudgetDataManager/BudgetDataManager.types";
import type { OrderIntex } from "../BudgetListOrder/BudgetListOrder.types";

const useBudgetsList = (): [Array<BudgetData>, (order: OrderIntex) => void, (value: string) => void] => {
  const dataManager = new BudgetDataManager(new LocalStorageProvider());
  const [ totalBudgets ] = React.useState<Array<BudgetData>>(dataManager.getBudgets());
  const [ budgets, setBudgets ] = React.useState<Array<BudgetData>>(totalBudgets);
  const onOrderClick = (order: OrderIntex) => {
    const newBudgets = [ ...budgets ];
    
    newBudgets.sort((a, b) => {
      return (a[order] < b[order] ? -1 : a[order] > b[order] ? 1 : 0)
    })
    setBudgets(newBudgets);
  }
  const onFilterChange = (value: string) => {
    const newBudgets = totalBudgets.filter((element) => element.name.indexOf(value) >= 0);

    setBudgets(newBudgets);
  }

  return [budgets, onOrderClick, onFilterChange];
}

export default useBudgetsList;