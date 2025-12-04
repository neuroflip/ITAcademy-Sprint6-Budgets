import { NavLink } from 'react-router';
import BudgetManager from '../../components/BudgetManager/BudgetsManager';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

import './styles/budgets.css';

const Budgets = () => {
    return (<ErrorBoundary fallback={ <p>There was an error, please try again</p> }>
        <header className="budget__header gradientBackground">
            <h1 className="mainTitle">Get the best quality</h1>
        </header>
        <BudgetManager />
        <div className="mt-10 flex justify-center gap-4">
            <NavLink to="/" className="button"> Home </NavLink>
        </div>
    </ErrorBoundary>)
}

export default Budgets;