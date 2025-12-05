import type { BudgetListItemProps } from "./BudgetstListCard.types";

const BudgetstListCard = ({ budget }: BudgetListItemProps) => {
  return (<div className="card__container container flex w-full m-auto">
      <div className="flex-1 text-left">
        <h1 className="title">{ budget.name }</h1>
        <div>{ budget.email }</div>
        <div>{ budget.telephone }</div>
      </div>
      <div>
        <h2 className="flex-1 font-bold text-left">Contracted services:</h2>
        <ul className="text-left">
          { budget.services.map((service) => 
            <li className="list-disc ml-4">
              { service.title } ({ service.extras && 
                service.extras.map((extra, index) => <>
                  { index > 0 ? ', ' : '' }
                  { extra.text }: { extra.value }
                </>) })
            </li>) }
        </ul>
      </div>
      <div className="flex-1">
        <div>Total:</div>
        <span className="title">{ budget.totalCost }</span>€
      </div>
  </div>)
}

export default BudgetstListCard;