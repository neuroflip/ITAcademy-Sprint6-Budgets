import type { BudgetExtrasProps } from "./BudgetExtras.types";

import './styles/budgetExtras.css';

const BudgetExtras = ({ id, text, value, onChange }: BudgetExtrasProps) => {
  const onClick = (operator: number) => {
    const total = value + operator;

    if (total >= 1) {
      onChange(Number(id), total);
    }
  }

  return (<div className='text-right'>
    <span className="">{ text }</span>
    <button className="budgetExtras__button" onClick={ () => { onClick(-1) } }>-</button>
    <input className="budgetExtras__value" type="text" id={ id } value={ value } readOnly />
    <button className="budgetExtras__button" onClick={ () => { onClick(1) } }>+</button>
  </div>)
}

export default BudgetExtras;