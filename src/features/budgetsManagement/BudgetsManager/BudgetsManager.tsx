import BudgetCreationForm from "../../budgetCreation/BudgetCreationForm/BudgetCreationForm";
import useBudgetManager from "./hooks/useBudgetsManager";
import BudgetstList from "../../budgetsListing/BudgetstList/BudgetstList";
import BudgetServiceList from "../BudgetServiceList/BudgetServiceList";

import './styles/budgetsManager.css';

const BudgetsManager = () => {
    const [ budgetServices, totalBudgets, calculatedTotalCost, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch ] = useBudgetManager();

    return  (<div className="mt-10">
        <label className="leading-8 sm:text-base text-sm">
            Monthly
            <div className="switch mx-5">
                <input id="annualSwitch" type="checkbox" onChange= { onSwitch } checked={ isSwitchOn } />
                <span className="slider round"></span>
            </div>
            Annual payment
        </label>
        <BudgetServiceList budgetServices={ budgetServices }
            isSwitchOn = { isSwitchOn } onChangeBudget={ onChangeBudget } />
        <div className="container text-right">
            Budget price: <h1 id="totalCost" className="inline ml-1 font-bold text-3xl">{ calculatedTotalCost }</h1>€
        </div>
        { calculatedTotalCost > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }
        <BudgetstList initialBudgets={ totalBudgets }/>
    </div>)
}

export default BudgetsManager;