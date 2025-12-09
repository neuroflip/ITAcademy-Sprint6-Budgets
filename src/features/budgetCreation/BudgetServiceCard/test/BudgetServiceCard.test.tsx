import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BudgetServiceCard from '../BudgetServiceCard';

const budget = {
  id: 1,
  title: 'Web Design',
  description: 'A professional web design service',
  cost: 100,
  isChecked: true,
  extras: [{ id: 0, text: 'Pages', value: 1 },
    { id: 1, text: 'Languages', value: 3 }]
};

vi.mock('../hooks/useBudgetServiceCard', () => {
  const onClickCheckBox = vi.fn();
  const onChangeExtras = vi.fn();

  return {
    default: vi.fn(() => [onClickCheckBox, onChangeExtras]),
    mocks: { onClickCheckBox, onChangeExtras }
  };
});

import * as useBudgetServiceCardCustomHook from '../hooks/useBudgetServiceCard';

vi.mock('../../BudgetServiceExtras/BudgetServiceExtras', () => ({
  default: ({ text, value }: { text: string, value: number }) => {
    return <div data-testid="mocked-extra">text: { text } value: { value }</div>;
  }
}));

describe('BudgetServiceCard', () => {
  describe('BudgetServiceCard render', () => {
    it('renders main content correctly', () => {
      render(<BudgetServiceCard budget={ budget } onChangeBudget={ vi.fn() } discount={ 0.2 } />);

      expect(screen.getByText('Web Design')).toBeInTheDocument();
      expect(screen.getByText('A professional web design service')).toBeInTheDocument();
      expect(screen.getByText('save 20%')).toBeInTheDocument();
    });
  });

  describe('BudgetServiceCard interaction', () => {
    it('calls checkbox handler when clicking checkbox', () => {
      render(<BudgetServiceCard budget={ budget } onChangeBudget={ vi.fn() } discount={ 0 } />);

      const checkbox = screen.getByRole('checkbox');
      checkbox.click();
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      const onClickCheckBox = (useBudgetServiceCardCustomHook as any).mocks.onClickCheckBox;

      expect(onClickCheckBox).toHaveBeenCalled();
    });

    it('renders extras when checked', () => {
      render(<BudgetServiceCard budget={ budget } onChangeBudget={ vi.fn() } discount={ 0 } />
      );
      const extras = screen.getAllByTestId('mocked-extra');

      expect(extras).toHaveLength(2);
      expect(extras[0].textContent).toEqual('text: Pages value: 1');
      expect(extras[1]).toHaveTextContent('text: Languages value: 3');
    });
  });
});