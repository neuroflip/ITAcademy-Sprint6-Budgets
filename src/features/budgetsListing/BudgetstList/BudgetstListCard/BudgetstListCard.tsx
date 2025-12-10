import ClipboardCopySharer from "../../../../components/ClipboardCopySharer/ClipboardCopySharer";

import type { BudgetListItemProps } from "./BudgetstListCard.types";

const BudgetstListCard = ({ budget }: BudgetListItemProps) => {
  return (<article className="card__container container grid w-full m-auto grid-cols-[25%_60%_10%_5%]">
      <div className="text-left col-start-1 col-end-3 row-start-1 sm:col-start-1 sm:row-end-2 sm:col-end-2">
        <h1 className="title truncate">{ budget.name }</h1>
        <div className="text-gray-800 truncate">{ budget.email }</div>
        <div className="text-gray-800 truncate">{ budget.telephone }</div>
      </div>
      <div className="mt-2 sm:mt-0 row-start-2 col-start-1 col-end-4 sm:row-start-1 sm:col-start-2 sm-col-end-3">
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
      <div className="col-start-3 row-start-1">
        <div className="text-gray-500 font-bold">Total:</div>
        <span className="title">{ budget.totalCost }</span>€
      </div>
      { budget.id && <ClipboardCopySharer id={ budget.id } /> }
  </article>)
}

export default BudgetstListCard;