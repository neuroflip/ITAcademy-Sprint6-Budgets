import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../App';

vi.mock('../pages/Landing/Landing', () => ({
  default: () => <div>Landing Page</div>
}));

vi.mock('../pages/Budgets/Budgets', () => ({
  default: () => <div>Budgets Page</div>
}));

describe('App routing', () => {
  it('renders Landing page on "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Landing Page/i)).toBeInTheDocument();
  });

  it('renders Budgets page on "/budgets" route', () => {
    render(
      <MemoryRouter initialEntries={['/budgets']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Budgets Page/i)).toBeInTheDocument();
  });
});