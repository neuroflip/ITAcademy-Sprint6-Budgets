import * as React from 'react';
import BudgetDataManager from '../../../BudgetDataManager/BudgetDataManager';
import type { BudgetServiceForCard } from '../../BudgetServiceCard/BudgetServiceCard.types';
import { calculateTotalCost, initValues } from '../helpers/utils';
import LocalStorageProvider from '../../../BudgetDataManager/providers/LocalStorageProvider';
import type { BudgetFormData } from '../../BudgetCreationForm/BudgetCreationForm.types';
import type { BudgetData } from '../../../BudgetDataManager/BudgetDataManager.types';

const useBudgetsManager = (): [Array<BudgetServiceForCard>, number, (budget: BudgetServiceForCard) => void,
      (data: BudgetFormData) => void] => {
    const [ budgets, setBudgets ] = React.useState<Array<BudgetServiceForCard>>(initValues());
    const [totalValue, setTotalValue] = React.useState(calculateTotalCost(budgets));
    const dataManager = new BudgetDataManager(new LocalStorageProvider());

    const onChangeBudget = (budget: BudgetServiceForCard) => {
        const newValues = [...budgets];

        newValues[budget.id] =  budget;
        setTotalValue(calculateTotalCost(newValues));
        setBudgets(newValues);
    }

    const onBudgetCreation = (data: BudgetFormData) => {
        const budgetData: BudgetData = { ...data, budgets };

        dataManager.saveBudget(budgetData);
    }

    return [budgets, totalValue, onChangeBudget, onBudgetCreation];
}

export default useBudgetsManager;