import { describe, it, expect } from 'vitest';
import BudgetsManager from '../../budgetsManagement/BudgetsManager/BudgetsManager';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('Budget creation flow: calculation of total cost', () => {
  it('calculates the total cost of the budget', () => {
    render(<BudgetsManager />);

    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });
    const seoCheck = screen.getByRole("checkbox", { name: "Add Seo" });
    const adsCheck = screen.getByRole("checkbox", { name: "Add Ads" });

    fireEvent.click(webCheck);
    fireEvent.click(seoCheck);
    fireEvent.click(adsCheck);

    //500 (web) + 30*3 (1 page + 1 languages) + 400 (Ads) + 300 (Seo)
    expect(screen.getByText(/Budget price/i).textContent).toEqual("Budget price: 1260€");

  });

  it('calculates the total cost of the budget, including extra web services', () => {
    render(<BudgetsManager />);

    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });
    act(() => {
      fireEvent.click(webCheck);
    });
    
    const plusElement = screen.getAllByRole('button', {name: '+' })[0];

    act(() => {
      fireEvent.click(plusElement);
    });

    //500 (web) + 30*5 (2 page + 1 languages)
    expect(screen.getByText(/Budget price/i).textContent).toEqual("Budget price: 590€");

  });

  it('calculates the total cost of the budget 0 if there is no service selected', () => {
    render(<BudgetsManager />);

    expect(screen.getByText(/Budget price/i).textContent).toEqual("Budget price: 0€");
  });

  it('calculates the total cost of the budget, including extra web services when discount is active ', () => {
    render(<BudgetsManager />);

    const discountCheck = screen.getByRole("checkbox", { name: "Monthly paymentAnnual payment" });
    const webCheck = screen.getByRole("checkbox", { name: "Add Web" });
    act(() => {
      fireEvent.click(webCheck);
      fireEvent.click(discountCheck);
    });
    
    const plusElement = screen.getAllByRole('button', {name: '+' })[0];

    act(() => {
      fireEvent.click(plusElement);
    });

    expect(screen.getByText(/Budget price/i).textContent).toEqual("Budget price: 496€");

  });
});