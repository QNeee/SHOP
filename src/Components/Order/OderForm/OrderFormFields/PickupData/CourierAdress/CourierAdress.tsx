import type { FC } from 'react';
import type { CheckFormOrder, DeliveryAdress } from '../../../../../../types';
import { ValidatedInput } from '../../../../ValidatedInput/ValidatedInput';
import { SectionTitle } from '../../../OrderForm.styled';
import { Row } from '../PickupData.styled';
import { CourierAdressContainer } from './CourierAdress.styled';
import { FormValidator } from '../../../../FormValidator';
interface ICourierAdress {
  deliveryAdress: DeliveryAdress;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
  submit: boolean;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
export const CourierAdress: FC<ICourierAdress> = ({
  deliveryAdress,
  setCheckFormOrdr,
  submit,
  onChangeInput,
}) => {
  return (
    <CourierAdressContainer>
      <SectionTitle>Адреса доставки</SectionTitle>
      <ValidatedInput
        setFormChecked={setCheckFormOrdr}
        submit={submit}
        placeholder="Київ"
        name="deliveryAdress,city"
        value={deliveryAdress.city}
        isValid={FormValidator.ValidateField('name', deliveryAdress.city)}
        onChange={onChangeInput}
      />
      <ValidatedInput
        setFormChecked={setCheckFormOrdr}
        submit={submit}
        placeholder="пр.переулка 12"
        name="deliveryAdress,street"
        value={deliveryAdress.street}
        isValid={
          deliveryAdress.street.length === 0
            ? null
            : deliveryAdress.street.length > 3
        }
        onChange={onChangeInput}
      />
      <Row>
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          placeholder="12"
          name="deliveryAdress,house"
          value={deliveryAdress.house}
          isValid={FormValidator.ValidateField('numbers', deliveryAdress.house)}
          onChange={onChangeInput}
          inputMode="numeric"
        />
        <ValidatedInput
          setFormChecked={setCheckFormOrdr}
          submit={submit}
          placeholder="6"
          name="deliveryAdress,flat"
          value={deliveryAdress.flat}
          isValid={FormValidator.ValidateField('numbers', deliveryAdress.flat)}
          onChange={onChangeInput}
          inputMode="numeric"
        />
      </Row>
    </CourierAdressContainer>
  );
};
