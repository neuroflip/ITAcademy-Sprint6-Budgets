import BudgetServiceExtras from '../BudgetServiceExtras/BudgetServiceExtras';
import useBudgetServiceCard from './hooks/useBudgetServiceCard';
import type { BudgetServiceCardProps } from "./BudgetServiceCard.types";

import './styles/budgetServiceCard.css';

const BudgetServiceCard = ({ budget, onChangeBudget, discount }: BudgetServiceCardProps) => {
    const [onClickCheckBox, onChangeExtras] = useBudgetServiceCard(budget, onChangeBudget);

    return (<div className={ `card__container container ${ budget.isChecked ? 'card__container--selected' : ''}` }>
        <h1 className="budgetCard__dobleRow title text-left">{ budget.title }</h1>
        <div className="budgetCard__dobleRow text-left font-bold">{ budget.description }</div>
        <span>
            { discount > 0 ? <div className="text-amber-600">save 20%</div> : "" }
            <h1 className="title inline">{ budget.cost - (budget.cost * discount) }</h1>€</span>
        <input id={`apply${budget.id}`} onChange={ onClickCheckBox } type="checkbox" className="justify-self-end w-4 h-4 border rounded" checked={ budget.isChecked } />
        <span className="justify-self-start ml-1">Add</span>
        <div className="col-start-1 col-end-6 row-span-1 justify-self-end mt-5">
            { budget && budget.extras && budget.isChecked ? <>
                { budget.extras ? <BudgetServiceExtras text={ budget.extras[0].text }
                    infoMessage="Add the pages number that your peoject will have. It will add 30€ per page." id='0'
                    value={ budget.extras && budget.extras[0].value } onChange={ onChangeExtras } /> : <></> }
                { budget.extras ? <BudgetServiceExtras text={ budget.extras[1].text }
                    infoMessage="Add the languages number that your project will have. It will add 30€ per language." id='1'
                    value={ budget.extras[1].value } onChange={ onChangeExtras } /> : <></> }
            </> : <></> }
        </div>
    </div>)
}

export default BudgetServiceCard;