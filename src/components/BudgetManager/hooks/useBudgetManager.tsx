import * as React from 'react';
import BudgetDataManager from '../../../BudgetDataManager/BudgetDataManager';
import type { BudgetCardValues } from '../../BudgetCard/BudgetCard.types';
import { calculateTotalCost, initValues } from '../helpers/utils';
import LocalStorageProvider from '../../../BudgetDataManager/providers/LocalStorageProvider';
import type { BudgetFormData } from '../../BudgetCreationForm/BudgetCreationForm.types';



const useBudgetManager = (): [number, (id: number, cardValues: BudgetCardValues) => void,
      (data: BudgetFormData) => void] => {
    const [totalValue, setTotalValue] = React.useState(0);
    const [ values, setValues ] = React.useState<Array<BudgetCardValues>>(initValues());
    const dataManager = new BudgetDataManager(new LocalStorageProvider());

    const onChangeBudget = (id: number, cardValues: BudgetCardValues) => {
        const newValues = [...values];

        newValues[id] = cardValues;
        setTotalValue(calculateTotalCost(newValues));
        setValues(newValues);
    }

    const onBudgetCreation = (data: BudgetFormData) => {
        dataManager.saveBudget({ ...data, data: values});
    }

    return [totalValue, onChangeBudget, onBudgetCreation];
}

export default useBudgetManager;