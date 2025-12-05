import type { BudgetServiceForCard, Extra } from "../components/BudgetServiceCard/BudgetServiceCard.types";

interface BudgetService {
  id: number,
  cost: number,
  extras: Array<Extra> | null
}

type BudgetData = {
  date: string,
  name: string,
  telephone: string,
  email: string,
  totalCost: number,
  services: Array<BudgetServiceForCard>
}

interface BudgetDataProvider {
  getBudgets: () => Array<BudgetData>,
  saveBudget: (data: BudgetData) => void
}

export type { BudgetService, BudgetData, BudgetDataProvider };