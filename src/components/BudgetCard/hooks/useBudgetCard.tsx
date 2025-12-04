import * as React from 'react';
import { getBudgetInitialValues, getBudgetValues } from '../helpers/utils';
import type { BudgetCardValues } from '../BudgetCard.types';

const useBudgetCard = (id: number, cost: number, extraCost: number, hasExtras: boolean, onChangeBudget: (id: number, values: BudgetCardValues) => void):
  [BudgetCardValues, () => void, (extra: number, value: number) => void] => {
    const [budgetValues, setBudgetValues] = React.useState<BudgetCardValues>(getBudgetInitialValues());

    const onClickCheckBox = () => {
        const newBudgetValues = { ...budgetValues }

        newBudgetValues.isChecked = !newBudgetValues.isChecked;
        getBudgetValues(newBudgetValues, hasExtras, cost, extraCost);        
        setBudgetValues(newBudgetValues);
        onChangeBudget(id, newBudgetValues);
    }

    const onChangeExtras = (extra: number, value: number) => {
        const newBudgetValues = { ...budgetValues };

        newBudgetValues.extras[extra] = value;
        newBudgetValues.extrasCost = newBudgetValues.extras.reduce((acc, value) => acc + value) * extraCost;
        onChangeBudget(id, newBudgetValues);
    }

    return [budgetValues, onClickCheckBox, onChangeExtras];
}

export default useBudgetCard;