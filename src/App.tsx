import Landing from './pages/Landing/Landing';
import Budgets from './pages/Budgets/Budgets';
import { Route, Routes } from 'react-router';

import './styles/App.css'

function App() {

  return <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/budgets" element={<Budgets />} />
    </Routes>
}

export default App
