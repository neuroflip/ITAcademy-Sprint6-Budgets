import type { BudgetCardValues } from "../components/BudgetCard/BudgetCard.types";

type BudgetData = {
  name: string,
  telephone: string,
  email: string,
  data: Array<BudgetCardValues>
}

interface BudgetDataProvider {
  getBudgets: () => Array<BudgetData>,
  saveBudget: (data: BudgetData) => void
}

export type { BudgetData, BudgetDataProvider };