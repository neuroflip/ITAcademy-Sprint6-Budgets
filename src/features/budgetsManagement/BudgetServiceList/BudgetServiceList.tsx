import BudgetServiceCard from "../../budgetCreation/BudgetServiceCard/BudgetServiceCard";
import type { BudgetServiceListProps } from "./BudgetServiceList.types";

const BudgetServiceList = ({ budgetServices, isSwitchOn, onChangeBudget }: BudgetServiceListProps) => {
  return <>{ budgetServices.map((budgetService) => {
    return <BudgetServiceCard key={ budgetService.cost }
        discount={ isSwitchOn ? 0.2 : 0.0 }
        onChangeBudget = { onChangeBudget }
        budget={ budgetService } />
  })}</>
}

export default BudgetServiceList;