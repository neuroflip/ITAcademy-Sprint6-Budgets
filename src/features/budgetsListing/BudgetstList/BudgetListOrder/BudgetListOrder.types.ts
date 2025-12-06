
type BudgetListOrderProps = {
  onOrderClick: (order: OrderIndex) => void
}

type OrderIndex = "date" | "name" | "totalCost";

export type { BudgetListOrderProps, OrderIndex }