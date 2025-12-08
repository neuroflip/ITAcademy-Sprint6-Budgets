import { NavLink } from "react-router";
import Header from "../../components/Header/Header";
import BudgetstListCard from "../../features/budgetsListing/BudgetstList/BudgetstListCard/BudgetstListCard";
import useBudgetPreview from "./hooks/useBudgetPreview";

import type { BudgetPreviewProps } from "./BudgetPreview.types";

const BudgetPreview = ({ id }: BudgetPreviewProps) => {
  const [ budgetData, isLoaded ] = useBudgetPreview(id);
  return (<>
    <Header />
    <div className="mt-5 mb-10">
      { budgetData ? <BudgetstListCard budget={ budgetData } />: 
        isLoaded ? <>Budget not found</> : <>Loading</> }
    </div>
    <NavLink className="mt-10 button" to="/"> Home </NavLink>
  </>);
}

export default BudgetPreview;