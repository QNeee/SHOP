import type { FC } from 'react';
import {
  ButtonsContainer,
  FormGroup,
  FormTitle,
  Label,
  SaveButton,
} from './AddPaymentCardForm.styled';
import { FormContainer, Input, Row } from './OrderForm.styled';
interface IAddPaymentCardForm {
  setActive: Function;
}
export const AddPaymentCardForm: FC<IAddPaymentCardForm> = ({ setActive }) => {
  const onClickAdd = () => {};
  return (
    <FormContainer>
      <FormTitle>Додати картку</FormTitle>
      <FormGroup>
        <Label>Номер картки</Label>
        <Input placeholder="0000 0000 0000 0000" />
      </FormGroup>
      <Row>
        <FormGroup>
          <Label>Термін дії</Label>
          <Input placeholder="MM / YY" />
        </FormGroup>

        <FormGroup>
          <Label>CVV</Label>
          <Input placeholder="123" />
        </FormGroup>
      </Row>
      <FormGroup>
        <Label>Ім'я власника</Label>
        <Input placeholder="IVAN IVANOV" />
      </FormGroup>
      <ButtonsContainer>
        <SaveButton onClick={onClickAdd}>Зберегти картку</SaveButton>
        <SaveButton onClick={() => setActive()}>Закрити</SaveButton>
      </ButtonsContainer>
    </FormContainer>
  );
};
