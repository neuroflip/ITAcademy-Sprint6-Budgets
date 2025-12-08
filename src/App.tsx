import Landing from './pages/Landing/Landing';
import Budgets from './pages/Budgets/Budgets';
import { Route, Routes } from 'react-router';

import './styles/App.css'
import BudgetPreview from './pages/BudgetPreview/BudgetPreview';

function App() {

  return <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/budgets" element={<Budgets />} />
      <Route path="/budget/:id" element={<BudgetPreview />} />
    </Routes>
}

export default App
