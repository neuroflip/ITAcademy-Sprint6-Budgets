type BudgetFormData = {
  name: string,
  telephone: string,
  email: string
}

type BudgetCreationFormProps = {
  onBudgetCreation: (data: BudgetFormData) => void
}

export type { BudgetCreationFormProps, BudgetFormData };