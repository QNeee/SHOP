import { type FC } from 'react';
import { DeliverySelectorContainer, HiddenRadio, RadioCard } from './DeliverySelector.styled';
import { Courier, PickUp } from '../../Helper';
interface IDeliverySelector {
  setDelivery: Function;
  delivery: string;
}
export const DeliverySelector: FC<IDeliverySelector> = ({ setDelivery, delivery }) => {
  return (
    <>
      <DeliverySelectorContainer>
        <RadioCard $active={delivery === Courier.key}>
          <HiddenRadio
            type="radio"
            name="delivery"
            value={Courier.key}
            checked={delivery === Courier.key}
            onChange={() => setDelivery(Courier.key)}
          />
          {Courier.value}
        </RadioCard>

        <RadioCard $active={delivery === PickUp.key}>
          <HiddenRadio
            type="radio"
            name="delivery"
            value={PickUp.key}
            checked={delivery === PickUp.key}
            onChange={() => setDelivery(PickUp.key)}
          />
          {PickUp.value}
        </RadioCard>
      </DeliverySelectorContainer>
    </>
  );
};
