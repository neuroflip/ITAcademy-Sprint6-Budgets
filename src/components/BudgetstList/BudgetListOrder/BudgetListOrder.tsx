import * as React from "react";
import type { BudgetListOrderProps, OrderIntex } from "./BudgetListOrder.types";

const ELEMENT_DATE = "date";
const ELEMENT_PRICE = "totalCost";
const ELEMENT_NAME = "name";

const BudgetListOrder = ({ onOrderClick }: BudgetListOrderProps) => {
  const [orderSelected, setOrderSelected] = React.useState<string>(ELEMENT_DATE);
  const onClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
    const element = event.target as HTMLSpanElement;
    const id = element.id;

    onOrderClick(id as OrderIntex);
    setOrderSelected(id);
  }

  return <div className="text-right flex-1">
    <span id={ ELEMENT_DATE } onClick={ onClickHandler } className={ `hover:font-bold ${orderSelected === ELEMENT_DATE ? 'font-bold' : ''}` }>
      Date { orderSelected === ELEMENT_DATE ? ' *': '' }
    </span>
    <span id={ ELEMENT_PRICE } onClick={ onClickHandler } className={ `hover:font-bold ${orderSelected === ELEMENT_PRICE ? 'font-bold' : ''}`}>
      Price { orderSelected === ELEMENT_PRICE ? ' *': '' }
    </span>
    <span id={ ELEMENT_NAME } onClick={ onClickHandler } className={ `hover:font-bold  ${orderSelected === ELEMENT_NAME ? 'font-bold' : ''}` }>
      Name { orderSelected === ELEMENT_NAME ? ' *': '' }
    </span>
  </div>
}

export default BudgetListOrder;