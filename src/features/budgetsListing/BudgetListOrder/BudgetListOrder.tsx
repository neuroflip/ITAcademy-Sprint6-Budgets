import * as React from "react";
import type { BudgetListOrderProps, OrderIndex } from "./BudgetListOrder.types";

import './styles/budgetListOrder.css';

const ELEMENT_DATE = "date";
const ELEMENT_PRICE = "totalCost";
const ELEMENT_NAME = "name";

const BudgetListOrder = ({ onOrderClick }: BudgetListOrderProps) => {
  const [orderSelected, setOrderSelected] = React.useState<string>(ELEMENT_DATE);
  const getOrderElementClassName = (order: OrderIndex) => `cursor-pointer sm:text-base text-sm mr-2 hover:font-bold ${orderSelected === order ? 'font-bold' : ''}`;
  const getOrderIndicator = (order: OrderIndex) => orderSelected === order ? ' ^': '';
  const onClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.target as HTMLSpanElement;
    const id = element.id as OrderIndex;

    onOrderClick(id);
    setOrderSelected(id);
  }

  return <div className="text-right flex-1">
    <span role="button" id={ ELEMENT_DATE } onClick={ onClickHandler } className={ getOrderElementClassName(ELEMENT_DATE) }>
      Date <span className="orderElement">{ getOrderIndicator(ELEMENT_DATE) }</span>
    </span>
    <span role="button" id={ ELEMENT_PRICE } onClick={ onClickHandler } className={ getOrderElementClassName(ELEMENT_PRICE)}>
      Price <span className="orderElement">{ getOrderIndicator(ELEMENT_PRICE) }</span>
    </span>
    <span role="button" id={ ELEMENT_NAME } onClick={ onClickHandler } className={ getOrderElementClassName(ELEMENT_NAME) }>
      Name <span className="orderElement">{ getOrderIndicator(ELEMENT_NAME) }</span>
    </span>
  </div>
}

export default BudgetListOrder;