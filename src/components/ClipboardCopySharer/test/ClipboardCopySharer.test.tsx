import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ClipboardCopySharer from '../ClipboardCopySharer';

const writeText = vi.fn()

Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('ClipboardCopySharer', () => {
  describe('ClipboardCopySharer Render', () => {
    it('renders the ui to be able to copy to clipboard', () => {
      render(<ClipboardCopySharer id={ 123 } />);
      const clip = screen.getByText(/📎/i);

      expect(clip).toBeInTheDocument();
    });
  });

  describe('ClipboardCopySharer Render', () => {
    it('copies to clipboard when clicked', () => {
      render(<ClipboardCopySharer id={ 123 } />);
      const clip = screen.getByText(/📎/i);

      act(() => {
        fireEvent.click(clip);
      });

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(`${window.location.host}/ITAcademy-Sprint6-Budgets/budget/123`);
    });
  });
});