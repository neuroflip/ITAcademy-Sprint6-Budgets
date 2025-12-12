import { NavLink, useParams } from "react-router";
import Header from "../../components/Header/Header";
import BudgetView from "../../features/budgetView/BudgetView/BudgetView";

const Budget = () => {
  const budgetId = useParams().id;
  
  return (<>
    <Header />
    <div className="mt-5 mb-10">
      { budgetId ? <BudgetView id={ budgetId } /> : <>Budget id not specified or not found</> }
    </div>
    <NavLink className="mt-10 button" to="/"> Home </NavLink>
  </>);
}

export default Budget;