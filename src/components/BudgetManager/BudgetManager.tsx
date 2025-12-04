
import BudgetCard from "../BudgetCard/BudgetCard";
import BudgetCreationForm from "../BudgetCreationForm/BudgetCreationForm";
import { baseExtrasCost, budgetData } from "./helpers/utils";
import useBudgetManager from "./hooks/useBudgetManager";

import './styles/budgetManager.css';

const BudgetManager = () => {
    const [totalValue, onChangeBudget, onBudgetCreation] = useBudgetManager();
    return  (<>
        { budgetData.map((element) => {
            return <BudgetCard hasExtras={ element.id === 0 }
                key={ element.cost } onChangeBudget = { onChangeBudget }
                id= { element.id } title={ element.title }
                description={ element.description } cost={ element.cost }
                extraCost={ baseExtrasCost }></BudgetCard>
        })}
        <div className="container text-right">
            Budget price: <h1 className="inline ml-1 font-bold text-3xl">{ totalValue }</h1>€
        </div>
        { totalValue > 0 && <BudgetCreationForm onBudgetCreation={ onBudgetCreation }/> }
    </>)
}

export default BudgetManager;