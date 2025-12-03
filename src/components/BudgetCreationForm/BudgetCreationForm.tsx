import { useFormStatus } from "react-dom";
import { validateInput, nameSchema, telephoneSchema, emailSchema, onSubmitValidation } from "./helpers/validations";
import type { BudgetCreationFormProps } from "./BudgetCreationForm.types";
import './styles/budgetCreationForm.css';

import * as React from 'react';

const BudgetCreationForm = ({ onBudgetCreation }: BudgetCreationFormProps) => {
  const { pending } = useFormStatus();

  const [name, setName] = React.useState('');
  const [telephone, setTelephone] = React.useState('');
  const [email, setEmail] = React.useState('');

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
  
  return <div className="my-20 container text-left dropShadow p-10 rounded-xl">
      <h1 className="text-left title">Request a budget</h1>
      <form className="my-5 grid grid-cols-1 sm:grid-cols-4 gap-3" action={ submitAction } noValidate>
        <input value={ name } onChange={ validateName } className="row-start-1 sm:row-start-1 w-full sm:w-40 border border-gray-500 rounded mr-3 p-3" type="text" minLength={2} placeholder="Name..." id="name" name="name" />
        <input value = { telephone } onChange={ validateTelephone } className="row-start-2 sm:row-start-1 w-full sm:w-40 border border-gray-500 rounded mr-3 p-3" type="tel" placeholder="Telephone Number..." id="telephone" name="telephone" />
        <input value = { email } onChange = { validateEmail } className="row-start-3 sm:row-start-1 w-full sm:w-40 border border-gray-500 rounded mr-3 p-3" type="email" minLength={5} placeholder="Email" id="email" name="email" />
        <button className="row-start-4 sm:row-start-1 w-40 button p-0" type="submit">{ pending ? "Submitting..." : "Request" }</button>
        <div className="error__feedback name__feedback col-span-4"></div>
        <div className="error__feedback telephone__feedback col-span-4"></div>
        <div className="error__feedback email__feedback col-span-4"></div>
      </form>
    </div>
}

export default BudgetCreationForm;