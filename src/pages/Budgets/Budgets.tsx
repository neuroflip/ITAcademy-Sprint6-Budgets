import { NavLink } from 'react-router';
import BudgetManager from '../../components/BudgetManager/BudgetManager';

import './styles/budgets.css';

const Budgets = () => {
    return (<>
        <header className="budget__header">
            <h1 className="w-80 font-bold text-xl">Get the best quality</h1>
        </header>
        <BudgetManager />
        <NavLink to="/"> Home </NavLink>
    </>)
}

export default Budgets;