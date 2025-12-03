
import * as React from "react";
import type { BudgetCardValues } from "../BudgetCard/BudgetCard.types";
import type { BudgetFormData } from "../BudgetCreationForm/BudgetCreationForm.types"

import BudgetDataManager from "../../BudgetDataManager/BudgetDataManager";
import LocalStorageProvider from "../../BudgetDataManager/providers/LocalStorageProvider";
import BudgetCard from "../BudgetCard/BudgetCard";
import BudgetCreationForm from "../BudgetCreationForm/BudgetCreationForm";
import { initValues, baseExtrasCost, calculateTotalCost, budgetData } from "./helpers/utils";

import './styles/budgetManager.css';

const BudgetManager = () => {
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
        dataManager.saveBudget({ ...data, data: values})
    }

    return  (<>
        { budgetData.map((element) => {
            return <BudgetCard hasExtras={ element.id === 0 }
                key={ element.cost } onChangeBudget = { onChangeBudget }
                id= { element.id } title={ element.title }
                description={ element.description } cost={ element.cost }
                extraCost={ baseExtrasCost }></BudgetCard>
        })}
        <div className="container text-right">
            Budget price: <h1 className="inline ml-1 font-bold text-3xl">{ totalValue }</h1>€
        </div>
        { totalValue > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }
    </>)
}

export default BudgetManager;