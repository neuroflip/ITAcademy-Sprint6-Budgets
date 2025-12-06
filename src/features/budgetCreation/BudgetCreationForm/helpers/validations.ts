  import { INVALIDCLASS } from "./utils";
  
  import * as z from 'zod';

  const nameSchema = z.string().min(2, "The name must have at least 2 chars");
  const telephoneSchema = z.string().regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, 'The telephone is not in the correct format');
  const emailSchema = z.email("The email is not in the correct format");
  
  const BudgetFormSchema = z.object({ 
    name: nameSchema,
    telephone: telephoneSchema,
    email: emailSchema
  });

  const validateFormData = (formData: FormData) => {
    const email = formData.get("email"),
      telephone = formData.get("telephone"),
      name = formData.get("name");
    
    return BudgetFormSchema.safeParse({ name: name, telephone: telephone, email: email });
  }

  const validateInput = (feedbackSelector: string, elementId: string, value: string, schema: z.ZodString | z.ZodEmail) => {
    const feedbackElement = document.querySelector(feedbackSelector);
    const element = document.getElementById(elementId);
    const result = z.safeParse(schema, value);

    if (!result.success && feedbackElement && element) {
      feedbackElement.textContent = result.error.issues[0].message;
      element.classList.add(INVALIDCLASS);
    } else if (result.success && feedbackElement && element) {
      feedbackElement.textContent = '';
      element.classList.remove(INVALIDCLASS);
    }

    return result.success;
  }

    const cleanErrorsOnSubmit = () => {
    const nameFeedbackElement = document.querySelector('.name__feedback');
    const telephoneFeedbackElement = document.querySelector('.telephone__feedback');
    const emailFeedbackElement = document.querySelector('.email__feedback');
    const nameElement = document.getElementById('name');
    const telephoneElement = document.getElementById('telephone');
    const emailElement = document.getElementById('email');

    if (nameFeedbackElement && nameElement) {
      nameFeedbackElement.textContent = '';
      nameElement.classList.remove(INVALIDCLASS);
    }
    if (telephoneFeedbackElement && telephoneElement) {
      telephoneFeedbackElement.textContent = '';
      telephoneElement.classList.remove(INVALIDCLASS);
    }
    if (emailFeedbackElement && emailElement) {
      emailFeedbackElement.textContent = '';
      emailElement.classList.remove(INVALIDCLASS);
    }
  }

  const onSubmitValidation = (formData: FormData) => { 
    cleanErrorsOnSubmit();
    return (validateInput('.name__feedback', 'name', formData.get('name') as string || '', nameSchema) &&
      validateInput('.telephone__feedback', 'telephone', formData.get('telephone') as string || '', telephoneSchema) &&
      validateInput('.email__feedback', 'name', formData.get('email') as string || '', emailSchema));
  }

  export { validateInput, validateFormData, onSubmitValidation, nameSchema, telephoneSchema, emailSchema };
