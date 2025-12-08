    
import type { BudgetServiceForCard, Extra } from "../../../budgetCreation/BudgetServiceCard/BudgetServiceCard.types";
import budgetData from '../budget.config.json';

const baseExtrasCost = 30;

const initValues = () => {
    const newValues: Array<BudgetServiceForCard> = [];

    for(const budgetService of budgetData) {
        newValues.push({
            id: budgetService.id,
            isChecked: false,
            title: budgetService.title,
            description: budgetService.description,
            cost: budgetService.cost,
            extras: budgetService.extras
        });
    }

    return newValues;
};

const calculateTotalCost = (values: Array<BudgetServiceForCard>, discount: number) => {
    const price = values.reduce((acc: number, element: BudgetServiceForCard) => {
            const extrasCost = element.extras ? element.extras.reduce((acc: number, extra: Extra) => acc + extra.value, 0) : 0;

            return element.isChecked ? acc + element.cost + extrasCost * baseExtrasCost : acc;
        }, 0);

    return price - (price * discount);
};

export { initValues, baseExtrasCost, calculateTotalCost, budgetData };