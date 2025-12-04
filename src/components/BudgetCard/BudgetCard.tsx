import BudgetExtras from '../BudgetExtras/BudgetExtras';
import useBudgetCard from './hooks/useBudgetCard';
import type { BudgetCardProps } from "./BudgetCard.types";

import './styles/budgetCard.css';

const BudgetCard = ({ id, title, description, cost, extraCost, hasExtras = false, onChangeBudget }: BudgetCardProps) => {
    const [budgetValues, onClickCheckBox, onChangeExtras] = useBudgetCard(id, cost, extraCost, hasExtras, onChangeBudget);

    return (<div className={ `budgetCard__container container ${ budgetValues.isChecked ? 'budgetCard__container--selected' : ''}` }>
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