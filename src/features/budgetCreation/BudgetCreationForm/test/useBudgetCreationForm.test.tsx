import { describe, it, vi, expect } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import useBudgetCreationForm from '../hooks/useBudgetCreationForm';
import * as validations from '../helpers/validations';

vi.mock(import('../helpers/validations'), async (importOriginal) => {
  const mod = await importOriginal()

  return {
    ...mod,
    validateInput: vi.fn(),
    onSubmitValidation: vi.fn().mockReturnValue(true)
  }
})

describe('useBudgetCreationForm', () => {
  describe('useBudgetCreationForm validations', () => {
    it('validate name sets the name value and calls to validate his value', () => {
      const onBudgetCreation = vi.fn();
      const { result } = renderHook(() => useBudgetCreationForm(onBudgetCreation));
      const event = {
        target: { value: 'input value' },
      } as React.ChangeEvent<HTMLInputElement>;
      const validateNameFunc = result.current[5];

      act(() => {
        validateNameFunc(event);
      })

      expect(result.current[0]).toEqual('input value');
      expect(vi.mocked(validations.validateInput)).toHaveBeenCalledWith('.name__feedback', 'name', 'input value', vi.mocked(validations.nameSchema));
    });

    it('validate telephone sets the phone number value and calls to validate his value', () => {
      const onBudgetCreation = vi.fn();
      const { result } = renderHook(() => useBudgetCreationForm(onBudgetCreation));
      const event = {
        target: { value: '1234567' },
      } as React.ChangeEvent<HTMLInputElement>;
      const validateTelephoneFunc = result.current[6];

      act(() => {
        validateTelephoneFunc(event);
      })

      expect(result.current[1]).toEqual('1234567');
      expect(vi.mocked(validations.validateInput)).toHaveBeenCalledWith('.telephone__feedback', 'telephone', '1234567', vi.mocked(validations.telephoneSchema));
    });

    it('validate email sets the email value and calls to validate his value', () => {
      const onBudgetCreation = vi.fn();
      const { result } = renderHook(() => useBudgetCreationForm(onBudgetCreation));
      const event = {
        target: { value: 'test@email.com' },
      } as React.ChangeEvent<HTMLInputElement>;
      const validateEmailFunc = result.current[4];

      act(() => {
        validateEmailFunc(event);
      })

      expect(result.current[2]).toEqual('test@email.com');
      expect(vi.mocked(validations.validateInput)).toHaveBeenCalledWith('.email__feedback', 'email', 'test@email.com', vi.mocked(validations.emailSchema));
    });
  });

  describe('useBudgetCreationForm submit action', () => {
    it('calls the onBudgetCreation callback when a request is submited', () => {
      const onBudgetCreation = vi.fn();
      const { result } = renderHook(() => useBudgetCreationForm(onBudgetCreation));
      const submitAction = result.current[7];
      const formData = new FormData();

      formData.append("name", "input name");
      formData.append("telephone", "input telephone");
      formData.append("email", "input email");
      submitAction(formData);

      expect(vi.mocked(validations.onSubmitValidation)).toHaveBeenCalledWith(formData);
      expect(onBudgetCreation).toHaveBeenCalledWith({
        "email": "input email",
        "name": "input name",
        "telephone": "input telephone"
      });
    });
  });
});