import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalInfo from '../ModalInfo';

describe('Modal Info', () => {
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
});