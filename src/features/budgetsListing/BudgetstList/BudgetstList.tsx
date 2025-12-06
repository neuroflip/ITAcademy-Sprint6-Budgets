import BudgetstListCard from "./BudgetstListCard/BudgetstListCard";
import BudgetListOrder from "./BudgetListOrder/BudgetListOrder";
import BudgetListFilter from "./BudgetListFilter/BudgetListFilter";
import useBudgetsList from "./hooks/useBudgetsList";

import type { BudgetData } from "../../../BudgetDataManager/BudgetDataManager.types";
import type { BudgetsListProps } from "./BudgetsList.types";

const BudgetstList = ({ initialBudgets }: BudgetsListProps) => {
  const [ budgets, onOrderClick, onFilterChange ] = useBudgetsList(initialBudgets);

  return (<div className="container border-t-4 border-gray-400 border-dashed mt-26 pt-20">
    <h1 className="title text-left mb-5">Ongoing budgets:</h1>
    <div className="flex mb-4 items-end">
      <BudgetListFilter onFilterChange={ onFilterChange } />
      <BudgetListOrder onOrderClick = { onOrderClick } />
    </div>
    { budgets.map((data: BudgetData) => <BudgetstListCard key={ `${data.date}` } budget={ data } />) }
  </div>);
}

export default BudgetstList;