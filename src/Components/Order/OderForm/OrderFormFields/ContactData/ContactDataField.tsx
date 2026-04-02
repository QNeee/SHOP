import type { FC } from 'react';
import { ValidatedInput } from '../../../ValidatedInput/ValidatedInput';
import { SectionTitle } from '../../OrderForm.styled';
import type { FormAction } from '../../../formReducer';
import type { CheckFormOrder, ContactData } from '../../../../../types';
import { FormValidator } from '../../../FormValidator';
interface IContactDataField {
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  submit: boolean;
  contactData: ContactData;
}
export const ContactDataField: FC<IContactDataField> = ({
  onChangeInput,
  contactData,
  dispatch,
  submit,
  setCheckFormOrdr,
}) => {
  return (
    <>
      <SectionTitle>Контактні дані</SectionTitle>
      <ValidatedInput
        setFormChecked={setCheckFormOrdr}
        submit={submit}
        value={contactData.name}
        placeholder="Тарас"
        name="contactData,name"
        isValid={FormValidator.ValidateField('name', contactData.name, 4)}
        onChange={onChangeInput}
      />
      <ValidatedInput
        setFormChecked={setCheckFormOrdr}
        submit={submit}
        value={contactData.phone}
        placeholder="+38 (___) ___-__-__"
        name={'contactData,phone'}
        isValid={FormValidator.ValidateField('numbers', contactData.phone, 10)}
        dispatch={dispatch}
      />
      <ValidatedInput
        setFormChecked={setCheckFormOrdr}
        submit={submit}
        placeholder="Taras@gmail.com"
        name="contactData,email"
        value={contactData.email}
        isValid={FormValidator.ValidateField('email', contactData.email)}
        onChange={onChangeInput}
      />
    </>
  );
};
