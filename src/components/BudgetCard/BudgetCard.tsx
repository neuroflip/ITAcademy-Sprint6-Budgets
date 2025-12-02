import * as React from 'react';
import BudgetExtras from '../BudgetExtras/BudgetExtras';
import { getBudgetValues, getBudgetInitialValues } from './helpers/utils';
import type { BudgetCardProps, BudgetCardValues } from "./BudgetCard.types";

import './styles/budgetCard.css';

const BudgetCard = ({ id, title, description, cost, extraCost, hasExtras = false, onChangeBudget }: BudgetCardProps) => {
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

    return (<div className={ `budgetCard__container ${ budgetValues.isChecked ? 'budgetCard__container--selected' : ''}` }>
        <h1 className="budgetCard__dobleRow title text-left">{ title }</h1>
        <div className="budgetCard__dobleRow text-left">{ description }</div>
        <span><h1 className="title inline">{ cost }</h1>€</span>
        <input onClick={ onClickCheckBox } type="checkbox" className="justify-self-end w-4 h-4 border rounded" />
        <span className="justify-self-start ml-1">Add</span>
        <div className="col-start-1 col-end-6 row-span-1 justify-self-end mt-5">
            { hasExtras && budgetValues.isChecked && <>
                <BudgetExtras text="Pages number" id='0' value={ budgetValues.extras[0] } onChange={ onChangeExtras } />
                <BudgetExtras text="Languages number" id='1' value={ budgetValues.extras[1] } onChange={ onChangeExtras } /></>
            }
        </div>
    </div>)
}

export default BudgetCard;