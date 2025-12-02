import * as React from 'react';
import BudgetExtras from '../BudgetExtras/BudgetExtras';
import type { BudgetCardProps, BudgetCardValues } from "./BudgetCard.types";

import './styles/budgetCard.css';

const BudgetCard = ({ id, title, description, cost, extraCost, hasExtraInfo = false, onChangeBudget }: BudgetCardProps) => {
    const [budgetValues, setBudgetValues] = React.useState<BudgetCardValues>({  
        isChecked: false,
        cost: 0,
        extrasCost: 0,
        extras: [0, 0]
    });

    const onClickCheckBox = () => {
        const newBudgetValues = { ...budgetValues }
        
        newBudgetValues.isChecked = !newBudgetValues.isChecked;
        if (newBudgetValues.isChecked) {
            newBudgetValues.cost = cost;
        } else {
            newBudgetValues.cost = 0;
            newBudgetValues.extras = [0, 0];
            newBudgetValues.extrasCost = 0;
        }
        
        setBudgetValues(newBudgetValues);
        onChangeBudget(id, newBudgetValues);
    }

    const onExtrasChange = (extra: number, value: number) => {
        const newBudgetValues = { ...budgetValues };

        newBudgetValues.extras[extra] = value;
        newBudgetValues.extrasCost = newBudgetValues.extras.reduce((acc, value) => acc + value) * extraCost;
        onChangeBudget(id, newBudgetValues);
    }

    return (<div className="budgetCard__container">
        <h1 className="budgetCard__dobleRow font-bold text-xl text-left">{ title }</h1>
        <div className="budgetCard__dobleRow text-left">{ description }</div>
        <h1 className="font-bold text-2xl">{ cost }€</h1>
        <input onClick={ onClickCheckBox } type="checkbox" className="mr-2 justify-self-end w-4 h-4 border rounded-xs" />
        <span className="justify-self-start ml-2">Add</span>
        <div className="col-start-1 col-end-6 row-span-1 justify-self-end">
            { hasExtraInfo && budgetValues.isChecked && <>
                <BudgetExtras text="Pages number" id='0' onValueChange={ onExtrasChange } />
                <BudgetExtras text="Languages number" id='1' onValueChange={ onExtrasChange } /></>
            }
        </div>
    </div>)
}

export default BudgetCard;