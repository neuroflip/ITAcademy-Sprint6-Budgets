import type { BudgetCardValues } from "../BudgetCard.types";

const getBudgetValues = (budgetValues: BudgetCardValues, hasExtras: boolean, cost: number, extraCost: number) => {
  if (budgetValues.isChecked) {
      budgetValues.cost = cost;
      budgetValues.extras = hasExtras ? [1, 1] : [0, 0];
      budgetValues.extrasCost = hasExtras ? 2 * extraCost : 0;
  } else {
      budgetValues.cost = 0;
      budgetValues.extras = [0, 0];
      budgetValues.extrasCost = 0;
  }
}

const getBudgetInitialValues = () => {
  return {  
    isChecked: false,
    cost: 0,
    extrasCost: 0,
    extras: [0, 0]
  }
}

export { getBudgetValues, getBudgetInitialValues };