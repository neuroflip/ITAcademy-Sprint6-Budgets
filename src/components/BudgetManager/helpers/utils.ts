    
import type { BudgetCardValues } from "../../BudgetCard/BudgetCard.types";
import budgetData from '../budget.config.json';

const baseExtrasCost = 30;

const initValues = () => {
    const newValues: Array<BudgetCardValues> = budgetData.map(() => {
        return {
            isChecked: false,
            cost: 0,
            extras: [0, 0],
            extrasCost: 0
        }
    });

    return newValues;
};

const calculateTotalCost = (values: Array<BudgetCardValues>) => {
    return values.reduce((acc, element) => acc + element.cost + element.extrasCost, 0);
};

export { initValues, baseExtrasCost, calculateTotalCost, budgetData };