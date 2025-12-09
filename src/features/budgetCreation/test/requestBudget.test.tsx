import { describe, it, expect } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import BudgetsManager from '../../budgetsManagement/BudgetsManager/BudgetsManager';

describe('Budget creation flow: request budget form', () => {
  it('does not show the request budget form if there is no service selected', () => {
    render(<BudgetsManager />);
    
    const requestButton = screen.queryByRole("button", { name: 'Request' });
    const inputName = screen.queryByRole("textbox", { name: 'Name:' });
    const inputTelephone = screen.queryByRole("textbox", { name: 'Telephone:' });
    const inputEmail = screen.queryByRole("textbox", { name: 'Email:' });

    expect(requestButton).not.toBeInTheDocument();
    expect(inputName).not.toBeInTheDocument();
    expect(inputTelephone).not.toBeInTheDocument();
    expect(inputEmail).not.toBeInTheDocument();
  });

  it('shows the request budget form if there is some service selected', () => {
    render(<BudgetsManager />);
    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });

    fireEvent.click(webCheck);
    const requestButton = screen.getByRole("button", { name: 'Request' });
    const inputName = screen.getByRole("textbox", { name: 'Name:' });
    const inputTelephone = screen.getByRole("textbox", { name: 'Telephone:' });
    const inputEmail = screen.getByRole("textbox", { name: 'Email:' });

    expect(requestButton).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputTelephone).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
  });

  it('shows errors in form when clicking to Request a budget without data', () => {
    render(<BudgetsManager />);
    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });

    fireEvent.click(webCheck);
    const requestButton = screen.getByRole('button', { name: 'Request'});
    
    fireEvent.click(requestButton);
    
    expect(screen.getByText('The name must have at least 2 chars')).toBeInTheDocument();
    expect(screen.getByText('The telephone is not in the correct format')).toBeInTheDocument();
    expect(screen.getByText('The email is not in the correct format')).toBeInTheDocument();
  });

  it('shows the new request in the Budgets List if the form is submited', () => {
    render(<BudgetsManager />);
    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });

    act(() => {
      fireEvent.click(webCheck);
    });
    
    const inputName = screen.getByRole("textbox", { name: 'Name:' });
    const inputTelephone = screen.getByRole("textbox", { name: 'Telephone:' });
    const inputEmail = screen.getByRole("textbox", { name: 'Email:' });

    inputName.setAttribute("value", "Test user");
    inputTelephone.setAttribute("value", "1234567");
    inputEmail.setAttribute("value", "testuser@email.com");
    const requestButton = screen.getByRole('button', { name: 'Request'});

    act(() => {
      fireEvent.click(requestButton);
    });

    const listItems = screen.getAllByRole('listitem');

    expect(screen.queryByText('The name must have at least 2 chars')).not.toBeInTheDocument();
    expect(screen.queryByText('The telephone is not in the correct format')).not.toBeInTheDocument();
    expect(screen.queryByText('The email is not in the correct format')).not.toBeInTheDocument();
    expect(screen.getByText('Test user')).toBeInTheDocument();
    expect(screen.getByText('1234567')).toBeInTheDocument();
    expect(screen.getByText('testuser@email.com')).toBeInTheDocument();
    expect(screen.getByText('testuser@email.com')).toBeInTheDocument();
    expect(listItems[0].textContent).toEqual("Web (Pages number: 1, Languages number: 1)");
    expect(listItems[1].textContent).toEqual("Seo ");
    expect(listItems[2].textContent).toEqual("Ads ");
  });
});