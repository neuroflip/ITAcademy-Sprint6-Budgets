
type BudgetListOrderProps = {
  onOrderClick: (order: OrderIntex) => void
}

type OrderIntex = "date" | "name" | "totalCost";

export type { BudgetListOrderProps, OrderIntex }