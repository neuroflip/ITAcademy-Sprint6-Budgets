import * as React from 'react';
import { useFormStatus } from "react-dom";
import { validateInput, nameSchema, telephoneSchema, emailSchema, onSubmitValidation } from "../helpers/validations";
import type { BudgetFormData } from '../BudgetCreationForm.types';

const useBudgetCreationForm = (onBudgetCreation: (data: BudgetFormData) => void):
  [string, string, string, boolean, (event: React.ChangeEvent<HTMLInputElement>) => void, 
    (event: React.ChangeEvent<HTMLInputElement>) => void, (event: React.ChangeEvent<HTMLInputElement>) => void,
     (formData: FormData) => void] => {
  const [name, setName] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { pending } = useFormStatus();

  const validateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    validateInput('.name__feedback', 'name', value, nameSchema);
    setName(value);
  }

  const validateTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    validateInput('.telephone__feedback', 'telephone', value, telephoneSchema);
    setTelephone(value);
  }
  
  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    validateInput('.email__feedback', 'email', value, emailSchema);
    setEmail(value);
  }

  const submitAction = (formData: FormData) => {
    if (onSubmitValidation(formData)) {
      onBudgetCreation({
        name: String(formData.get('name')) || '',
        telephone: String(formData.get('telephone')) || '',
        email: String(formData.get('email')) || '',
      });
    }
  }

  return [name, telephone, email, pending, validateEmail, validateName, validateTelephone, submitAction]
}

export default useBudgetCreationForm;