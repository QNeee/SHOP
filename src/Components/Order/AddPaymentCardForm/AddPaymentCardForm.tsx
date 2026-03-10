import { useState, type ChangeEvent, type FC } from 'react';
import {
  ButtonsContainer,
  FormGroup,
  FormTitle,
  Label,
  SaveButton,
} from './AddPaymentCardForm.styled';
import { FormContainer, Row } from '../OderForm/OrderForm.styled';
import { ValidatedInput } from '../ValidatedInput/ValidatedInput';
import { formatCardDuration, initialAddCardForm } from '../../../Helper';

interface IAddPaymentCardForm {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  scrollYPos: number;
}
export const AddPaymentCardForm: FC<IAddPaymentCardForm> = ({ setActive, scrollYPos }) => {
  const [form, setForm] = useState(initialAddCardForm);
  const [submit, setSubmit] = useState(false);
  const maxCardNumberLength = 16;
  const numberOfSpaces = 3;
  const maxLengthDurationTime = 4;
  const durationTimeAnotherSymbols = 3;
  const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === 'cardNumber') {
      const digitsOnly = e.target.value.replace(/\D/g, '');
      if (digitsOnly.length > maxCardNumberLength) return;
      const formatted = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
      setForm({
        ...form,
        cardNumber: formatted,
      });
    } else if (name === 'durationTime') {
      setForm({ ...form, durationTime: formatCardDuration(value) });
    } else
      setForm((prev) => {
        return { ...prev, [name]: value };
      });
  };
  return (
    <FormContainer>
      <FormTitle>Додати картку</FormTitle>
      <FormGroup>
        <Label>
          Номер картки
          <ValidatedInput
            placeholder="0000 0000 0000 0000"
            value={form.cardNumber}
            onChange={onChange}
            isValid={
              form.cardNumber.length === 0
                ? null
                : form.cardNumber.trim().length === maxCardNumberLength + numberOfSpaces
            }
            name="cardNumber"
            inputMode="numeric"
            submit={submit}
          />
        </Label>
      </FormGroup>
      <Row>
        <FormGroup>
          <Label>
            Термін дії
            <ValidatedInput
              placeholder="MM / YY"
              value={form.durationTime}
              onChange={onChange}
              isValid={
                form.durationTime.length === 0
                  ? null
                  : form.durationTime.trim().length ===
                    maxLengthDurationTime + durationTimeAnotherSymbols
              }
              name="durationTime"
              inputMode="numeric"
              submit={submit}
            />
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>
            CVV
            <ValidatedInput
              placeholder="123"
              value={form.cvv}
              onChange={onChange}
              isValid={form.cvv.length === 0 ? null : form.cvv.length === 3}
              name="cvv"
              submit={submit}
              type="password"
              maxLength={3}
              inputMode="numeric"
              pattern="\d*"
            />
          </Label>
        </FormGroup>
      </Row>
      <FormGroup>
        <Label>
          Ім'я власника
          <ValidatedInput
            placeholder="IVAN IVANOV"
            value={form.name}
            onChange={onChange}
            isValid={form.name.length === 0 ? null : form.name.trim().length > 10}
            name="name"
            submit={submit}
          />
        </Label>
      </FormGroup>
      <ButtonsContainer>
        <SaveButton type="button" onClick={() => setSubmit(true)}>
          Зберегти картку
        </SaveButton>
        <SaveButton
          onClick={() => {
            window.scrollTo({
              top: scrollYPos,
              behavior: 'smooth',
            });
            setActive(false);
          }}
        >
          Закрити
        </SaveButton>
      </ButtonsContainer>
    </FormContainer>
  );
};
