import type { FC } from 'react';
import {
  ButtonsContainer,
  FormGroup,
  FormTitle,
  Label,
  SaveButton,
} from './AddPaymentCardForm.styled';
import { FormContainer, Input, Row } from '../OderForm/OrderForm.styled';

interface IAddPaymentCardForm {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  scrollYPos: number;
}
export const AddPaymentCardForm: FC<IAddPaymentCardForm> = ({ setActive, scrollYPos }) => {
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
        <SaveButton type="button" onClick={() => console.log('save')}>
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
