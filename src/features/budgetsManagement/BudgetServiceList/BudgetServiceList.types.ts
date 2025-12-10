import type { BudgetServiceForCard } from "../../budgetCreation/BudgetServiceCard/BudgetServiceCard.types"


type BudgetServiceListProps = {
  budgetServices: Array<BudgetServiceForCard>,
  isSwitchOn: boolean,
  onChangeBudget: (budget: BudgetServiceForCard) => void
}

export type { BudgetServiceListProps };
