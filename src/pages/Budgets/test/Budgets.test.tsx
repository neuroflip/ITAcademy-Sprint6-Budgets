import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Budgets from '../Budgets';
import { MemoryRouter } from 'react-router';

vi.mock('../../../features/budgetsManagement/BudgetsManager/BudgetsManager', () => ({
  default: () => <div>BudgetsManager</div>
}));

describe('Budgets Page', () => {
  describe('Budgets Page render', () => {
    it('renders a header', () => {
      render(<MemoryRouter initialEntries={['/budgets']}>
        <Budgets />
      </MemoryRouter>);
      const header = screen.getByRole('banner');
      const header2 = screen.getByText(/Get the best quality/i);

      expect(header).toBeInTheDocument();
      expect(header2).toBeInTheDocument();
    });

    it('renders the BudgetsManager', () => {
      render(<MemoryRouter initialEntries={['/budgets']}>
        <Budgets />
      </MemoryRouter>);
      const budgetsManager = screen.getByText('BudgetsManager');

      expect(budgetsManager).toBeInTheDocument();
    });

    it('hidden container clicking on X', () => {
      render(<MemoryRouter initialEntries={['/budgets']}>
        <Budgets />
      </MemoryRouter>);

      expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    });
  });
});