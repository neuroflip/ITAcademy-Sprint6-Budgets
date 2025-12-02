    
import type { BudgetCardValues } from "../../BudgetCard/BudgetCard.types";
import data from '../budget.config.json';

const initValues = () => {
    const newValues: Array<BudgetCardValues> = data.map(() => {
        return {
            isChecked: false,
            cost: 0,
            extras: [0, 0],
            extrasCost: 0
        }
    });

    return newValues;
};

export { initValues };