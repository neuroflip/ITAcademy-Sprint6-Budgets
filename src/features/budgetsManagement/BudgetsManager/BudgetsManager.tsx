
import BudgetServiceCard from "../../budgetCreation/BudgetServiceCard/BudgetServiceCard";
import BudgetCreationForm from "../../budgetCreation/BudgetCreationForm/BudgetCreationForm";
import useBudgetManager from "./hooks/useBudgetsManager";
import BudgetstList from "../../budgetsListing/BudgetstList/BudgetstList";

import './styles/budgetsManager.css';

const BudgetsManager = () => {
    const [ budgetServices, totalBudgets, calculatedTotalCost, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch ] = useBudgetManager();

    return  (<div className="mt-10">
        <div className="leading-8">
            Monthly payment
            <label className="switch mx-5">
                <input id="annualSwitch" type="checkbox" onChange= { onSwitch } checked={ isSwitchOn } />
                <span className="slider round"></span>
            </label>
            Annual payment
        </div>
        { budgetServices.map((budgetService) => {
            return <BudgetServiceCard key={ budgetService.cost }
                discount={ isSwitchOn ? 0.2 : 0.0 }
                onChangeBudget = { onChangeBudget }
                budget={ budgetService } />
        })}
        <div className="container text-right">
            Budget price: <h1 id="totalCost" className="inline ml-1 font-bold text-3xl">{ calculatedTotalCost }</h1>€
        </div>
        { calculatedTotalCost > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }

        <BudgetstList initialBudgets={ totalBudgets }/>
    </div>)
}

export default BudgetsManager;