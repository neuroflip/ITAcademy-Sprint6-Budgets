import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BudgetServiceExtras from '../BudgetServiceExtras';
import ModalInfo from '../../../../components/ModalInfo/ModalInfo';

vi.mock('../../../../components/ModalInfo/ModalInfo', () => {
  return { 
    default: vi.fn().mockReturnValue(<div>ModalInfo</div>)
  }
});

describe('BudgetServiceExtras', () => {
  describe('BudgetServiceExtras Render', () => {
    it('renders a closed modal info', () => {
      const onChange = vi.fn();
      const infoMessage = 'This is a info message for the extra';

      render(<BudgetServiceExtras id="budgetExtra" text="text for the extra" value={100} onChange={onChange} infoMessage={ infoMessage } />);
      const modalInfo = screen.getByText(/ModalInfo/i);
      const calledWith = (ModalInfo as ReturnType<typeof vi.fn>).mock.calls[0][0];

      expect(modalInfo).toBeInTheDocument();
      expect(calledWith).toEqual({ 
        isOpen: false,
        message: infoMessage,
        onClose: expect.any(Function)
      });
    });

    it('renders a text, help element, operation buttons and value as input', () => {
      const onChange = vi.fn();
      const infoMessage = 'This is a info message for the extra';
      const text = 'text for the extra';
      const value = 200;

      render(<BudgetServiceExtras id="budgetExtra" text={text} value={value} onChange={onChange} infoMessage={infoMessage} />);
      const valueInput = screen.getByRole('textbox');

      expect(screen.getByText(/text for the extra/i)).toBeInTheDocument();
      expect(screen.getByText(/\(i\)/i)).toBeInTheDocument();
      expect(valueInput).toBeInTheDocument();
      expect((valueInput as HTMLInputElement).value).toBe(value.toString());
      expect(screen.getByText(/\+/i)).toBeInTheDocument();
      expect(screen.getByText(/-/i)).toBeInTheDocument();
    });
  });
});