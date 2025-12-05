import * as React from 'react';
import type { BudgetServiceExtrasProps } from "./BudgetServiceExtras.types";
import ModalInfo from "../ModalInfo/ModalInfo";

import './styles/budgetServiceExtras.css';

const BudgetExtras = ({ id, text, value, infoMessage, onChange }: BudgetServiceExtrasProps) => {
  const [ isModalOpen, setIsModalOpen ] = React.useState(false);
  const onClick = (operator: number) => {
    const total = value + operator;

    if (total >= 1) {
      onChange(Number(id), total);
    }
  }
  const onModalClick = () => {
    setIsModalOpen(!isModalOpen);
  }


  return (<div className='text-right'>
    <ModalInfo message={ infoMessage } isOpen={ isModalOpen } onClose={ onModalClick } />
    <span onClick={ onModalClick } className="rounded-full text-gray-500 border border-gray-500 p-1 mr-2">i</span>
    <span className="">{ text }</span>
    <button className="budgetExtras__button" onClick={ () => { onClick(-1) } }>-</button>
    <input className="budgetExtras__value" type="text" id={ id } value={ value } readOnly />
    <button className="budgetExtras__button" onClick={ () => { onClick(1) } }>+</button>
  </div>)
}

export default BudgetExtras;