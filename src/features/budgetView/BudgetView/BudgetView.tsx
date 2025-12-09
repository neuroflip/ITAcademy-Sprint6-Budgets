import useBudgetView from "./hooks/useBudgetView";
import BudgetstListCard from "../../budgetsListing/BudgetstList/BudgetstListCard/BudgetstListCard";
import type { BudgetViewProps } from "./BudgetView.types";

const BudgetView = ({ id }: BudgetViewProps) => {
  const [ budgetData, isLoaded ] = useBudgetView(id);

  return <>{ budgetData ? <BudgetstListCard budget={ budgetData } /> : 
    isLoaded ? <>Budget not found</> : <>Loading</> }</>

}

export default BudgetView;