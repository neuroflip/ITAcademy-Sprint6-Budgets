import type { BudgetServiceForCard, Extra } from "../features/budgetCreation/BudgetServiceCard/BudgetServiceCard.types";

interface BudgetService {
  id: number,
  cost: number,
  extras: Array<Extra> | null
}

type BudgetData = {
  id?: string,
  date: string,
  name: string,
  telephone: string,
  email: string,
  totalCost: number,
  services: Array<BudgetServiceForCard>
}

interface BudgetDataProvider {
  getBudgets: () => Array<BudgetData>,
  getBudget: (id: string) => BudgetData,
  saveBudget: (data: BudgetData) => void
}

export type { BudgetService, BudgetData, BudgetDataProvider };