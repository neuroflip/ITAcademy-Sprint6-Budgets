    
import type { BudgetServiceForCard, Extra } from "../../BudgetServiceCard/BudgetServiceCard.types";
import budgetData from '../budget.config.json';

const baseExtrasCost = 30;

const initValues = () => {
    const newValues: Array<BudgetServiceForCard> = [];

    for(const budget of budgetData) {
        newValues.push({
            id: budget.id,
            isChecked: false,
            title: budget.title,
            description: budget.description,
            cost: budget.cost,
            extras: budget.extras
        });
    }

    return newValues;
};

const calculateTotalCost = (values: Array<BudgetServiceForCard>) => {
    return values.reduce((acc: number, element: BudgetServiceForCard) => {
            const extrasCost = element.extras ? element.extras.reduce((acc: number, extra: Extra) => acc + extra.value, 0) : 0;

            return element.isChecked ? acc + element.cost + extrasCost * baseExtrasCost : acc;
        }, 0);
};

export { initValues, baseExtrasCost, calculateTotalCost, budgetData };