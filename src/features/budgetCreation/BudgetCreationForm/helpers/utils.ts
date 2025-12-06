const INVALIDCLASS = 'invalid';

const validateEmail = (emailValue: string, emailFeedbackElement: HTMLInputElement | null) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validates = emailPattern.test(emailValue);
  
  if (!validates && emailFeedbackElement) {
    emailFeedbackElement.classList.add(INVALIDCLASS);
  } else if (emailFeedbackElement) {
    emailFeedbackElement.classList.remove(INVALIDCLASS);
  }

  return validates;
}

const emailValidationOnChangeListener = () => {
  const emailFeedbackElement = document.querySelector('.email__feedback');
  const input = document.getElementById('email');
  const emailValue = (input as HTMLInputElement).value;
  
  return validateEmail(emailValue, emailFeedbackElement as HTMLInputElement);
}

const prepareEmailValidation = () => {
  const emailInput = document.getElementById('email');

  if (emailInput) {
    emailInput.addEventListener('change', emailValidationOnChangeListener);
  } else {
    throw new Error("There is no email to validate in report budget form!");
  }
}
export { validateEmail, prepareEmailValidation, INVALIDCLASS };