const INVALIDCLASS = 'invalid';
const VALIDCLASS = 'valid';
  
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
    element.classList.remove(VALIDCLASS);
  } else if (result.success && feedbackElement && element) {
    feedbackElement.textContent = '';
    element.classList.remove(INVALIDCLASS);
    element.classList.add(VALIDCLASS);
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
    nameElement.classList.remove(VALIDCLASS);
  }
  if (telephoneFeedbackElement && telephoneElement) {
    telephoneFeedbackElement.textContent = '';
    telephoneElement.classList.remove(INVALIDCLASS);
    telephoneElement.classList.remove(VALIDCLASS);
  }
  if (emailFeedbackElement && emailElement) {
    emailFeedbackElement.textContent = '';
    emailElement.classList.remove(INVALIDCLASS);
    emailElement.classList.remove(VALIDCLASS);
  }
}

const onSubmitValidation = (formData: FormData) => { 
  const nameValidates = validateInput('.name__feedback', 'name', formData.get('name') as string || '', nameSchema);
  const telephoneValidates = validateInput('.telephone__feedback', 'telephone', formData.get('telephone') as string || '', telephoneSchema);
  const emailValidates = validateInput('.email__feedback', 'name', formData.get('email') as string || '', emailSchema);

  if (nameValidates && telephoneValidates && emailValidates) {
    cleanErrorsOnSubmit();

    return true;
  } else {
    return false;
  }
}

export { validateInput, validateFormData, onSubmitValidation, nameSchema, telephoneSchema, emailSchema };
