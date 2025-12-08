import * as React from "react";

import type { BudgetData } from "../../../../BudgetDataManager/BudgetDataManager.types";
import type { OrderIndex } from "../../BudgetListOrder/BudgetListOrder.types";

const useBudgetsList = (totalBudgets: Array<BudgetData>): [ Array<BudgetData>, (order: OrderIndex) => void, (value: string) => void ] => {
  const [ budgets, setBudgets ] = React.useState<Array<BudgetData>>(totalBudgets);
  const onOrderClick = (order: OrderIndex) => {
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

  React.useEffect(() => {
    setBudgets(totalBudgets);
  }, [totalBudgets]);

  return [ budgets, onOrderClick, onFilterChange ];
}

export default useBudgetsList;