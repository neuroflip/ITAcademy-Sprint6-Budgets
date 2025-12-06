import type { BudgetServiceForCard } from '../BudgetServiceCard.types';

const useBudgetCard = (budget: BudgetServiceForCard, onChangeBudget: (budget: BudgetServiceForCard) => void):
  [() => void, (extra: number, value: number) => void] => {
    const onClickCheckBox = () => {
        const newBudgetValues = { ...budget }

        newBudgetValues.isChecked = !newBudgetValues.isChecked;
        onChangeBudget(newBudgetValues);
    }

    const onChangeExtras = (extraId: number, value: number) => {
        const newBudgetValues = { ...budget };

        if (newBudgetValues.extras) {
            newBudgetValues.extras[extraId].value = value;
        }
        onChangeBudget(newBudgetValues);
    }

    return [onClickCheckBox, onChangeExtras];
}

export default useBudgetCard;