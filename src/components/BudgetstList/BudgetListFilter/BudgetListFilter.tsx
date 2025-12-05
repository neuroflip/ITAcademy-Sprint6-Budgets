import * as React from "react";
import type { BudgetListFilterProps } from "./BudgetListFilter.types";

const BudgetListFilter = ({ onFilterChange }: BudgetListFilterProps) => {
  const [filter, setFilter ] = React.useState("");
  const onFilterChangeHandler = (event: React.ChangeEvent) => {
    const value = (event.target as HTMLInputElement).value;

    setFilter(value);
    onFilterChange(value);
  }

  return <div className="flex-1">
    <input id="filter" className="border border-gray-500 rounded p-2 bg-size-[15%] bg-no-repeat bg-right bg-[url('./src/components/BudgetstList/BudgetListFilter/assets/images/magnifyingGlass.png')]" onChange={ onFilterChangeHandler } type="text" value={ filter } />
  </div>
}

export default BudgetListFilter;