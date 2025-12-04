import type { Extra } from "../components/BudgetServiceCard/BudgetServiceCard.types";

interface BudgetService {
  id: number,
  cost: number,
  extras: Array<Extra> | null
}

type BudgetData = {
  id?: number,
  name: string,
  telephone: string,
  email: string,
  totalCost: number,
  budgets: Array<BudgetService>
}

interface BudgetDataProvider {
  getBudgets: () => Array<BudgetData>,
  saveBudget: (data: BudgetData) => void
}

export type { BudgetService, BudgetData, BudgetDataProvider };