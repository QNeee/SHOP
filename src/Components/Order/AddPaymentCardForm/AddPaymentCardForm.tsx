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
import { formatCardDuration, initialAddCardForm, initialCheckFormCard } from '../../../Helper';

interface IAddPaymentCardForm {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  scrollYPos: number;
}
export const AddPaymentCardForm: FC<IAddPaymentCardForm> = ({ setActive, scrollYPos }) => {
  const [form, setForm] = useState(initialAddCardForm);
  const [submit, setSubmit] = useState(false);
  const [checkFormCard, setCheckFormCard] = useState(initialCheckFormCard);
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
    } else if (name === 'name') {
      setForm((prev) => ({ ...prev, [name]: value.replace(/\d/g, '') }));
    } else
      setForm((prev) => {
        return { ...prev, [name]: value };
      });
  };
  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmit(true);
    console.log(checkFormCard);
  };
  return (
    <FormContainer>
      <FormTitle>Додати картку</FormTitle>
      <FormGroup>
        <Label>
          Номер картки
          <ValidatedInput
            setFormChecked={setCheckFormCard}
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
              setFormChecked={setCheckFormCard}
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
              setFormChecked={setCheckFormCard}
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
            setFormChecked={setCheckFormCard}
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
        <SaveButton type="submit" onClick={onClickSubmit}>
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
