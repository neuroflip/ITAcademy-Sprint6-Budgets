import type { BudgetData } from "../../../BudgetDataManager/BudgetDataManager.types";

const BudgetstListItem = (budget: BudgetData) => {
  return (<div>
    <div> 
      <h1>{ budget.name }</h1>
      { budget.email } <br /> { budget.telephone  } </div>
    <div>Services: <br /></div>
    <div></div>
  </div>)
}

export default BudgetstListItem;