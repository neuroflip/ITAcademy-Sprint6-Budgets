import * as React from 'react';
import BudgetDataManager from '../../../BudgetDataManager/BudgetDataManager';
import type { BudgetServiceForCard } from '../../BudgetServiceCard/BudgetServiceCard.types';
import { calculateTotalCost, initValues } from '../helpers/utils';
import LocalStorageProvider from '../../../BudgetDataManager/providers/LocalStorageProvider';
import type { BudgetFormData } from '../../BudgetCreationForm/BudgetCreationForm.types';
import type { BudgetData } from '../../../BudgetDataManager/BudgetDataManager.types';

const useBudgetsManager = (): [Array<BudgetServiceForCard>, number, (budget: BudgetServiceForCard) => void,
      (data: BudgetFormData) => void] => {
    const [ budgetServices, setBudgetServices ] = React.useState<Array<BudgetServiceForCard>>(initValues());
    const [totalValue, setTotalValue] = React.useState(calculateTotalCost(budgetServices));
    const dataManager = new BudgetDataManager(new LocalStorageProvider());

    const onChangeBudget = (budgetService: BudgetServiceForCard) => {
        const newValues = [...budgetServices];

        newValues[budgetService.id] =  budgetService;
        setTotalValue(calculateTotalCost(newValues));
        setBudgetServices(newValues);
    }

    const onBudgetCreation = (data: BudgetFormData) => {
        const budgetData: BudgetData = { 
            date: new Date().toISOString(),
            ...data,
            services: budgetServices,
            totalCost: totalValue 
        };

        dataManager.saveBudget(budgetData);
    }

    return [budgetServices, totalValue, onChangeBudget, onBudgetCreation];
}

export default useBudgetsManager;