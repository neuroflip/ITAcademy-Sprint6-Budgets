import * as React from 'react';
import BudgetDataManager from '../../../../BudgetDataManager/BudgetDataManager';
import type { BudgetServiceForCard } from '../../../budgetsListing/BudgetServiceCard/BudgetServiceCard.types';
import { calculateTotalCost, initValues } from '../helpers/utils';
import LocalStorageProvider from '../../../../BudgetDataManager/providers/LocalStorageProvider';
import type { BudgetFormData } from '../../../budgetCreation/BudgetCreationForm/BudgetCreationForm.types';
import type { BudgetData } from '../../../../BudgetDataManager/BudgetDataManager.types';

const useBudgetsManager = (): [Array<BudgetServiceForCard>, number, boolean, (budget: BudgetServiceForCard) => void,
      (data: BudgetFormData) => void, () => void] => {
    const [ budgetServices, setBudgetServices ] = React.useState<Array<BudgetServiceForCard>>(initValues());
    const [ isSwitchOn, setIsSwitchOn ] = React.useState(false);
    const [totalValue, setTotalValue] = React.useState(calculateTotalCost(budgetServices, isSwitchOn ? 0.2 : 0));
    const dataManager = new BudgetDataManager(new LocalStorageProvider());

    const onSwitch = () => {
        setTotalValue(calculateTotalCost(budgetServices, !isSwitchOn ? 0.2 : 0));
        setIsSwitchOn(!isSwitchOn);
    }

    const onChangeBudget = (budgetService: BudgetServiceForCard) => {
        const newValues = [...budgetServices];

        newValues[budgetService.id] =  budgetService;
        setTotalValue(calculateTotalCost(newValues, isSwitchOn ? 0.2 : 0));
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

    return [budgetServices, totalValue, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch];
}

export default useBudgetsManager;