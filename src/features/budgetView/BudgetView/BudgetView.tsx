import useBudgetView from "./hooks/useBudgetView";
import BudgetstListCard from "../../budgetsListing/BudgetstList/BudgetstListCard/BudgetstListCard";

const BudgetView = () => {
  const [ budgetData, isLoaded ] = useBudgetView();

  return <>{ budgetData ? <BudgetstListCard budget={ budgetData } /> : 
    isLoaded ? <>Budget not found</> : <>Loading</> }</>

}

export default BudgetView;