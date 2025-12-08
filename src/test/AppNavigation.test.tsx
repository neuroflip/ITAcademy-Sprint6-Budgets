import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../App';

describe('App Navigation', () => {
  it('lets user navigate to budgets page from Landing', async () => {
    render(<MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>);

    fireEvent.click(screen.getByRole('link', { name: /Get My Quote Now/i }));

    expect(screen.getByText(/There aren't ongoing budgets/i)).toBeInTheDocument();
  });

  it('lets user navigate to Landing page from Budgets', async () => {
    render(<MemoryRouter initialEntries={['/budgets']}>
        <App />
      </MemoryRouter>);

    fireEvent.click(screen.getByRole('link', { name: /Home/i }));

    expect(screen.getByText(/Get My Quote Now/i)).toBeInTheDocument();
  });
});
