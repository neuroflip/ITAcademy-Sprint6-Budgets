import * as React from 'react';
import BudgetDataManager from '../../../../BudgetDataManager/BudgetDataManager';
import { calculateTotalCost, initValues } from '../helpers/utils';
import LocalStorageProvider from '../../../../BudgetDataManager/providers/LocalStorageProvider';

import type { BudgetServiceForCard } from '../../../budgetCreation/BudgetServiceCard/BudgetServiceCard.types';
import type { BudgetFormData } from '../../../budgetCreation/BudgetCreationForm/BudgetCreationForm.types';
import type { BudgetData } from '../../../../BudgetDataManager/BudgetDataManager.types';

const useBudgetsManager = (): [Array<BudgetServiceForCard>, Array<BudgetData>, number, boolean, (budget: BudgetServiceForCard) => void,
      (data: BudgetFormData) => void, () => void] => {
    const [ budgetServices, setBudgetServices ] = React.useState<Array<BudgetServiceForCard>>(initValues());
    const [ isSwitchOn, setIsSwitchOn ] = React.useState(false);
    const [calculatedTotalCost, setTotalValue] = React.useState(calculateTotalCost(budgetServices, isSwitchOn ? 0.2 : 0));
    const dataManager = new BudgetDataManager(new LocalStorageProvider());
    const [ totalBudgets, setTotalBudgets ] = React.useState<Array<BudgetData>>(dataManager.getBudgets());

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
        const newBudgets = [ ...totalBudgets ];
        const budgetData: BudgetData = { 
            date: new Date().toISOString(),
            ...data,
            services: budgetServices,
            totalCost: calculatedTotalCost 
        };

        dataManager.saveBudget(budgetData);
        newBudgets.push(budgetData);
        setTotalBudgets(newBudgets);
        setBudgetServices(() => {
            const initialBudgetsServices = initValues()

            setTotalValue(calculateTotalCost(initialBudgetsServices, 0));
            return initialBudgetsServices;
        });
        setIsSwitchOn(false);
    }

    return [budgetServices, totalBudgets, calculatedTotalCost, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch];
}

export default useBudgetsManager;