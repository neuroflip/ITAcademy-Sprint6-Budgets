import * as React from "react";
import type { BudgetListFilterProps } from "./BudgetListFilter.types";

import './styles/budgetListFilter.css';

const BudgetListFilter = ({ onFilterChange }: BudgetListFilterProps) => {
  const [filter, setFilter ] = React.useState("");
  const onFilterChangeHandler = (event: React.ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;

    setFilter(value);
    onFilterChange(value);
  }

  return <label className="flex-1 text-left">
    Search:
    <input id="filter" className="budgetList__filter" onChange={ onFilterChangeHandler } type="text" value={ filter } />
  </label>
}

export default BudgetListFilter;