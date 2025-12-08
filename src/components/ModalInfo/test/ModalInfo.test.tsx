import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalInfo from '../ModalInfo';

describe('Modal Info', () => {
  describe('Modal Info Render', () => {
    it('does not renders Modal Info if not indicated with isOpen', () => {
      render(<ModalInfo isOpen={false} message="Info Message" onClose={ () => {} } />);
      const modalContainer = screen.getByTestId(/modalContainer/i);

      expect(modalContainer).toBeInTheDocument();
      expect(modalContainer.classList.contains('hidden')).toBeTruthy();
    });

    it('renders Modal Info if indicated with isOpen and a message', () => {
      render(<ModalInfo isOpen={true} message="Info Message" onClose={ () => {} } />);
      const modalContainer = screen.getByTestId(/modalContainer/i);

      expect(modalContainer).toBeInTheDocument();
      expect(modalContainer.classList.contains('hidden')).toBeFalsy();
    });

    it('renders a close element', () => {
      render(<ModalInfo isOpen={true} message="Info Message" onClose={ () => {} } />);
      const closeDiv = screen.getByText(/X/i);

      expect(closeDiv).toBeInTheDocument();
    });
  });

  describe('Modal Info Close', () => {
    it('hidden container clicking on X', () => {
      const onClose = vi.fn();
      render(<ModalInfo isOpen={true} message="Info Message" onClose={ onClose } />);
      const closeDiv = screen.getByText(/X/i);

      fireEvent.click(closeDiv);

      expect(onClose).toHaveBeenCalled();
    });
  });
});