import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
import BudgetView from "../../features/budgetView/BudgetView/BudgetView";

const Budget = () => {

  return (<>
    <Header />
    <div className="mt-5 mb-10">
      <BudgetView />
    </div>
    <NavLink className="mt-10 button" to="/"> Home </NavLink>
  </>);
}

export default Budget;