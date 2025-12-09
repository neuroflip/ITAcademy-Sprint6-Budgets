import { describe, it, vi, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import useBudgetCard from '../hooks/useBudgetServiceCard';

const budget = {
  id: 1,
  title: 'Web Design',
  description: 'A professional web design service',
  cost: 100,
  isChecked: false,
  extras: [{ id: 0, text: 'Pages', value: 1 },
    { id: 1, text: 'Languages', value: 3 }]
};

const onChangeBudget = vi.fn();

/*
    const onChangeExtras = (extraId: number, value: number) => {
        const newBudgetValues = { ...budget };

        if (newBudgetValues.extras) {
            newBudgetValues.extras[extraId].value = value;
        }
        onChangeBudget(newBudgetValues);
    }
*/
describe('useBudgetServiceCard', () => {
  describe('useBudgetServiceCard', () => {
    it('calls the onChangeBudget with isChecked = true after a onClickCheckBox call', () => {
      const { result } = renderHook(() => useBudgetCard(budget, onChangeBudget));
      const onClickCheckBox = result.current[0];

      onClickCheckBox();

      expect(onChangeBudget).toHaveBeenCalledWith({ ...budget, isChecked: true });
    });

    it('calls the onChangeExtras with extra value updated', () => {
      const { result } = renderHook(() => useBudgetCard(budget, onChangeBudget));
      const onChangeExtras = result.current[1];

      onChangeExtras(0, 12);

      expect(onChangeBudget).toHaveBeenCalledWith({ ...budget, extras: 
        [{ id: 0, text: 'Pages', value: 12 },
        { id: 1, text: 'Languages', value: 3 }]
      });
    });

  });
});