import * as React from "react";
import BudgetDataManager from "../../BudgetDataManager/BudgetDataManager";
import BudgetstListCard from "./BudgetstListCard/BudgetstListCard";
import LocalStorageProvider from "../../BudgetDataManager/providers/LocalStorageProvider";
import type { BudgetData } from "../../BudgetDataManager/BudgetDataManager.types";

const BudgetstList = () => {
  const dataManager = new BudgetDataManager(new LocalStorageProvider());
  const [budgets] = React.useState<Array<BudgetData>>(dataManager.getBudgets());

  return (<div>
    <h1 className="title text-left">Ongoing budgets:</h1>
    { budgets.map((data: BudgetData) => <BudgetstListCard key={ `${data.name}` } budget={ data } />) }
  </div>);
}

export default BudgetstList;