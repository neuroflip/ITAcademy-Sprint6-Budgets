
import BudgetServiceCard from "../BudgetServiceCard/BudgetServiceCard";
import BudgetCreationForm from "../BudgetCreationForm/BudgetCreationForm";
import useBudgetManager from "./hooks/useBudgetsManager";
import BudgetstList from "../BudgetstList/BudgetstList";

import './styles/budgetsManager.css';

const BudgetsManager = () => {
    const [budgetServices, totalValue, isSwitchOn, onChangeBudget, onBudgetCreation, onSwitch] = useBudgetManager();

    return  (<div className="mt-10">
        <div className="leading-8">
            monthly payment
            <label className="switch mx-5">
                <input id="annualSwitch" type="checkbox" onChange= { onSwitch } checked={ isSwitchOn } />
                <span className="slider round"></span>
            </label>
            annual payment
        </div>
        { budgetServices.map((budgetService) => {
            return <BudgetServiceCard key={ budgetService.cost }
                discount={ isSwitchOn ? 0.2 : 0.0 }
                onChangeBudget = { onChangeBudget }
                budget={ budgetService } />
        })}
        <div className="container text-right">
            Budget price: <h1 className="inline ml-1 font-bold text-3xl">{ totalValue }</h1>€
        </div>
        { totalValue > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }

        <BudgetstList />
    </div>)
}

export default BudgetsManager;