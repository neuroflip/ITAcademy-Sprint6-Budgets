import * as React from 'react';
import type { BudgetExtrasProps } from "./BudgetExtras.types";

const BudgetExtras = ({ id, text, onValueChange }: BudgetExtrasProps) => {
  const [ value, setValue ] = React.useState<number>(0);
  const onClick = (operator: number) => {
    const total = value + operator;

    if (total >= 0) {
      setValue(total);
      onValueChange(Number(id), total);
    }
  }

  return (<div className='text-right'>
    { text }
    <button className="rounded-full border-gray-400 border m-1 leading-4 p-0" onClick={ () => { onClick(-1) } }>-</button>
    <input type="text" id={ id } className="border-gray-400 border rounded w-10 text-center text-bold" value={ value } readOnly />
    <button className="rounded-full border-gray-400 border m-1 leading-4 p-0" onClick={ () => { onClick(1) } }>+</button>
  </div>)
}

export default BudgetExtras;