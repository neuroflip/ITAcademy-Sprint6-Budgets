import Landing from './pages/Landing/Landing';
import Budgets from './pages/Budgets/Budgets';
import { Route, Routes } from 'react-router';

import './styles/App.css'
import Budget from './pages/Budget/Budget';

function App() {

  return <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/budgets" element={<Budgets />} />
      <Route path="/budget/:id" element={<Budget />} />
    </Routes>
}

export default App
