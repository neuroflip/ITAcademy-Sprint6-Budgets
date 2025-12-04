import type { BudgetListItemProps } from "./BudgetstListCard.types";

const BudgetstListCard = ({ budget }: BudgetListItemProps) => {
  return (<div className="card__container container flex w-full m-auto">
      <div className="flex-1 text-left">
        <h1 className="title">{ budget.name }</h1>
        <div>{ budget.email }</div>
        <div>{ budget.telephone }</div>
      </div>
      <h2 className="flex-1 font-bold">Contracted services:</h2>
      <div className="flex-1">
        <div>Total:</div>
        <span className="title">{ budget.totalCost }</span>€
      </div>
  </div>)
}

export default BudgetstListCard;