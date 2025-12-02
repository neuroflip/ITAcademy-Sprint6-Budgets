type BudgetCardProps = {
    id: number,
    title: string,
    description: string,
    cost: number,
    extraCost: number,
    hasExtraInfo?: boolean,
    onChangeBudget: (id: number, values: BudgetCardValues) => void
}


type BudgetCardValues = {
  isChecked: boolean,
  cost: number,
  extrasCost: number,
  extras: Array<number>
}

export type { BudgetCardProps, BudgetCardValues }