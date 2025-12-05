import * as React from "react";
import BudgetDataManager from "../../BudgetDataManager/BudgetDataManager";
import BudgetstListCard from "./BudgetstListCard/BudgetstListCard";
import LocalStorageProvider from "../../BudgetDataManager/providers/LocalStorageProvider";
import type { BudgetData } from "../../BudgetDataManager/BudgetDataManager.types";
import BudgetListOrder from "./BudgetListOrder/BudgetListOrder";
import BudgetListFilter from "./BudgetListFilter/BudgetListFilter";
import type { OrderIntex } from "./BudgetListOrder/BudgetListOrder.types";

const BudgetstList = () => {
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

  return (<div className="container border-t-4 border-gray-400 border-dashed mt-26 pt-20">
    <h1 className="title text-left mb-5">Ongoing budgets:</h1>
    <div className="flex mb-4 items-end">
      <BudgetListFilter onFilterChange={ onFilterChange } />
      <BudgetListOrder onOrderClick = { onOrderClick } />
    </div>
    { budgets.map((data: BudgetData) => <BudgetstListCard key={ `${data.name}` } budget={ data } />) }
  </div>);
}

export default BudgetstList;