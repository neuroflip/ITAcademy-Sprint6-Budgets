import type { BudgetService } from "../BudgetServiceCard.types";

const getBudgetValues = (budget: BudgetService, isChecked: boolean, hasExtras: boolean, cost: number) => {
  if (isChecked) {
      budget.cost = cost;
      budget.extras = hasExtras ? [] : null;
  } else {
      budget.cost = 0;
      budget.extras = hasExtras ? [] : null;
  }
}

const getBudgetInitialValues = (id: number, hasExtras: boolean) => {
  return {
    id: id,
    isChecked: false,
    cost: 0,
    extras: hasExtras ? [1, 1] : null
  }
}

export { getBudgetValues, getBudgetInitialValues };