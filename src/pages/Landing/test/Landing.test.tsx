import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Landing from '../Landing';
import { MemoryRouter } from 'react-router';

describe('Landing Page', () => {
  describe('Landing Page render', () => {
    it('renders the navigation link to budgets', () => {
      render(<MemoryRouter initialEntries={['/budgets']}>
        <Landing />
      </MemoryRouter>);

      expect(screen.getByRole('link', { name: /Get My Quote Now/i })).toBeInTheDocument();
    });
  });
});