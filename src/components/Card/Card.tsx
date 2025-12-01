import type { CardProps } from "./Card.types";

import './styles/card.css';

const Card = ({ title, description, value }: CardProps) => {
    return (<div className="card__container">
        <div className="">{ title }</div>
        <div>{ description }</div>
        <div>{ value }€</div>
        <input type="checkbox"/>
    </div>)
}

export default Card;