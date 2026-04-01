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
import {
  formatCardDuration,
  initialAddCardForm,
  initialCheckFormCard,
  localStorageItemsKeys,
} from '../../../Helper';
import type { Card } from '../../../types';
import { cardsImages } from './CardsImages';
import { FormValidator } from '../FormValidator';


interface IAddPaymentCardForm {
  setActive: React.Dispatch<React.SetStateAction<string>>;
  scrollYPos: number;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
  cards: Card[];
}
export const AddPaymentCardForm: FC<IAddPaymentCardForm> = ({
  setCards,
  setActive,
  scrollYPos,
  cards,
}) => {
  const [form, setForm] = useState(() => {
    let data = initialAddCardForm;
    const local = localStorage.getItem(localStorageItemsKeys.cardForm);
    if (local) data = JSON.parse(local);
    return data;
  });
  const [submit, setSubmit] = useState(false);
  const [checkFormCard, setCheckFormCard] = useState(initialCheckFormCard);
  const maxCardNumberLength = 16;
  const maxLengthDurationTime = 4;
  const durationTimeAnotherSymbols = 3;
  const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    let setValue = '';
    if (name === 'cardNumber') {
      const digitsOnly = e.target.value.replace(/\D/g, '');
      if (digitsOnly.length > maxCardNumberLength) return;
      const formatted = digitsOnly.replace(/(.{4})/g, '$1 ').trim();
      setValue = formatted;
    } else if (name === 'durationTime') setValue = formatCardDuration(value);
    else if (name === 'name') setValue = value.replace(/\d/g, '');
    else {
      if (isNaN(Number(value)) || value === " ") return;
      setValue = value;
    }
    setForm((prev) => {
      const newData = { ...prev, [name]: setValue };
      localStorage.setItem(localStorageItemsKeys.cardForm, JSON.stringify(newData));
      return newData;
    });
  };
  const clearForm = () => {
    setSubmit(false);
    localStorage.removeItem(localStorageItemsKeys.cardForm);
    setForm(initialAddCardForm);
    setCheckFormCard(initialCheckFormCard);
    setActive('');
  };
  const onClickSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmit(true);
    const isValid = Object.values(checkFormCard).some((item) => !item);
    if (isValid) return;
    const cardObj = {
      cardNumber: form.cardNumber,
      image: cardsImages[0],
    };
    setCards((prev) => {
      const newData = [...prev, cardObj];
      localStorage.setItem(localStorageItemsKeys.cards, JSON.stringify(newData));
      return newData;
    });
    clearForm();
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
                : FormValidator.ValidateCard(form.cardNumber, cards)
            }
            name="cardNumber"
            inputMode="numeric"
            submit={submit}
          />
          {FormValidator.isCardDuplicate(form.cardNumber, cards) ? <p style={{ color: "red" }}>card already in list</p> : null}
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
              onChange={onChange}
              setFormChecked={setCheckFormCard}
              placeholder="123"
              value={form.cvv}
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
            isValid={form.name.length === 0 ? null : FormValidator.ValidateField("cardName", form.name)}
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
            setActive('');
          }}
        >
          Закрити
        </SaveButton>
      </ButtonsContainer>
    </FormContainer>
  );
};
