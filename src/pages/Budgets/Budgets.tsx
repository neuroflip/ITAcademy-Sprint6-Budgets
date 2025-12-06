import { NavLink } from 'react-router';
import BudgetsManager from '../../features/budgetsManagement/BudgetsManager/BudgetsManager';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ModalInfo from '../../components/ModalInfo/ModalInfo';

import './styles/budgets.css';

const Budgets = () => {
    return (<ErrorBoundary fallback={ <ModalInfo isOpen={ true } onClose={() => { }} message="There is a problem rendering the App. Please reload and try again." /> }>
        <header className="budget__header gradientBackground">
            <h1 className="mainTitle">Get the best quality</h1>
        </header>
        <BudgetsManager />
        <div className="mt-10 flex justify-center gap-4">
            <NavLink to="/" className="button"> Home </NavLink>
        </div>
    </ErrorBoundary>)
}

export default Budgets;