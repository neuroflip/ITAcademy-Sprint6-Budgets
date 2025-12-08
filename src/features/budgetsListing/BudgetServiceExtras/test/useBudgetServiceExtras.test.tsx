import { describe, it, vi, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import useBudgetServiceExtras from '../hooks/useBudgetServiceExtras';

vi.mock('../../../../components/ModalInfo/ModalInfo', () => {
  return { 
    default: vi.fn().mockReturnValue(<div>ModalInfo</div>)
  }
});

describe('useBudgetServiceExtras', () => {
  it('returns the state closed for the modal info', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useBudgetServiceExtras("id", 23, onChange));
    const isModalOpen = result.current[0];

    expect(isModalOpen).toBeFalsy();
  });

  it('calls the onCLick parent callback when clicking +', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useBudgetServiceExtras("3456", 23, onChange));
    const onClick = result.current[1];

    onClick(2);

    expect(onChange).toHaveBeenCalledWith(3456, 25);
  });

  it('calls the onCLick parent callback when clicking -', () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useBudgetServiceExtras("1234", 23, onChange));
    const onClick = result.current[1];

    onClick(-2);

    expect(onChange).toHaveBeenCalledWith(1234, 21);
  });
});