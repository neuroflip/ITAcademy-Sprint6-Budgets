import BudgetServiceExtras from '../BudgetServiceExtras/BudgetServiceExtras';
import useBudgetServiceCard from './hooks/useBudgetServiceCard';
import type { BudgetServiceCardProps } from "./BudgetServiceCard.types";

import './styles/budgetServiceCard.css';

const BudgetServiceCard = ({ budget, onChangeBudget }: BudgetServiceCardProps) => {
    const [onClickCheckBox, onChangeExtras] = useBudgetServiceCard(budget, onChangeBudget);

    return (<div className={ `card__container container ${ budget.isChecked ? 'card__container--selected' : ''}` }>
        <h1 className="budgetCard__dobleRow title text-left">{ budget.title }</h1>
        <div className="budgetCard__dobleRow text-left font-bold">{ budget.description }</div>
        <span><h1 className="title inline">{ budget.cost }</h1>€</span>
        <input onClick={ onClickCheckBox } type="checkbox" className="justify-self-end w-4 h-4 border rounded" />
        <span className="justify-self-start ml-1">Add</span>
        <div className="col-start-1 col-end-6 row-span-1 justify-self-end mt-5">
            { budget && budget.extras && budget.isChecked && <>
                { budget.extras && <BudgetServiceExtras text="Pages number" id='0' value={ budget.extras && budget.extras[0].value } onChange={ onChangeExtras } /> }
                { budget.extras && <BudgetServiceExtras text="Languages number" id='1' value={ budget.extras[1].value } onChange={ onChangeExtras } /> }</>
            }
        </div>
    </div>)
}

export default BudgetServiceCard;