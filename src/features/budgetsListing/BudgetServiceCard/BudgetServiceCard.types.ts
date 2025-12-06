import type { BudgetService } from "../../../BudgetDataManager/BudgetDataManager.types"

type BudgetServiceCardProps = {
  budget: BudgetServiceForCard,
  onChangeBudget: (budget: BudgetServiceForCard) => void,
  discount: number
}

type Extra = {
  id: number,
  text: string,
  value: number
}

interface BudgetServiceForCard extends BudgetService { isChecked: boolean, title: string, description: string };

export type { BudgetServiceCardProps, BudgetService, BudgetServiceForCard, Extra }