import type { BudgetListItemProps } from "./BudgetstListCard.types";

const BudgetstListCard = ({ budget }: BudgetListItemProps) => {
  return (<div className="card__container container flex w-full m-auto">
      <div className="flex-1 text-left max-w-[25%]">
        <h1 className="title truncate">{ budget.name }</h1>
        <div className="text-gray-500 truncate">{ budget.email }</div>
        <div className="text-gray-500 truncate">{ budget.telephone }</div>
      </div>
      <div className="flex-2">
        <h2 className="font-bold text-left">Contracted services:</h2>
        <ul className="text-left">
          { budget.services.map((service) => 
            <li key={ service.title } className="list-disc ml-4 font-bold">
              { service.title } { service.extras && 
                service.extras.map((extra, index) => <span key={ extra.text }>
                  { index > 0 ? ', ' : '(' }
                  { extra.text }: { extra.value }
                  { index === (service.extras && service.extras.length - 1) ? ')' : '' }
                </span>) }
            </li>) }
        </ul>
      </div>
      <div className="flex-1">
        <div className="text-gray-500 font-bold">Total:</div>
        <span className="title">{ budget.totalCost }</span>€
      </div>
  </div>)
}

export default BudgetstListCard;