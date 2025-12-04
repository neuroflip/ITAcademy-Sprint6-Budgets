
import BudgetServiceCard from "../BudgetServiceCard/BudgetServiceCard";
import BudgetCreationForm from "../BudgetCreationForm/BudgetCreationForm";
import useBudgetManager from "./hooks/useBudgetsManager";
import BudgetstList from "../BudgetstList/BudgetstList";

import './styles/budgetsManager.css';

const BudgetsManager = () => {
    const [budgets, totalValue, onChangeBudget, onBudgetCreation] = useBudgetManager();
    return  (<>
        { budgets.map((budget) => {
            return <BudgetServiceCard key = { budget.cost }
                onChangeBudget = { onChangeBudget }
                budget={ budget } />
        })}
        <div className="container text-right">
            Budget price: <h1 className="inline ml-1 font-bold text-3xl">{ totalValue }</h1>€
        </div>
        { totalValue > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }
        <BudgetstList />
    </>)
}

export default BudgetsManager;