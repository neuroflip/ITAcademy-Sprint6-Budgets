import * as React from 'react';
import type { CardProps } from "./Card.types";

import './styles/card.css';

const Card = ({ title, description, value, onCheck }: CardProps) => {
    const [ isChecked, setIsChecked ] = React.useState(false);
    const onClickEventHandler = () => {
        if (isChecked) {
            onCheck(-value);
        } else {
            onCheck(value);
        }
        setIsChecked(!isChecked);
    }

    return (<div className="rounded-xl border-0 shadow-lg shadow-black/50 grid grid-cols-5 m-5 p-6 items-center">
        <h1 className="col-start-1 col-end-3 row-span-1 font-bold text-xl text-left">{ title }</h1>
        <div className="col-start-1 col-end-3 row-span-1 text-left text-xs">{ description }</div>
        <h1 className="font-bold text-xl">{ value }€</h1>
        <input onClick={ onClickEventHandler } type="checkbox" className="mr-2 justify-self-end w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium"></input>
        <span className="justify-self-start ml-2 text-xs">Add</span>
    </div>)
}

export default Card;