
import BudgetServiceCard from "../BudgetServiceCard/BudgetServiceCard";
import BudgetCreationForm from "../BudgetCreationForm/BudgetCreationForm";
import useBudgetManager from "./hooks/useBudgetsManager";
import BudgetstList from "../BudgetstList/BudgetstList";

import './styles/budgetsManager.css';

const BudgetsManager = () => {
    const [budgetServices, totalValue, onChangeBudget, onBudgetCreation] = useBudgetManager();
    return  (<>
        { budgetServices.map((budgetService) => {
            return <BudgetServiceCard key = { budgetService.cost }
                onChangeBudget = { onChangeBudget }
                budget={ budgetService } />
        })}
        <div className="container text-right">
            Budget price: <h1 className="inline ml-1 font-bold text-3xl">{ totalValue }</h1>€
        </div>
        { totalValue > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }
        
        <BudgetstList />
    </>)
}

export default BudgetsManager;