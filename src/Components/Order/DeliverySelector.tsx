import { type FC } from 'react';
import { DeliverySelectorContainer, HiddenRadio, RadioCard } from './DeliverySelector.styled';
import { Courier, OrderSelectTitle, PickUp } from '../../Helper';
interface IDeliverySelector {
  setDelivery: Function;
  delivery: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
export const DeliverySelector: FC<IDeliverySelector> = ({
  setSelected,
  setDelivery,
  delivery,
  setOpen,
}) => {
  return (
    <>
      <DeliverySelectorContainer>
        <RadioCard $active={delivery === Courier.key}>
          <HiddenRadio
            type="radio"
            name="delivery"
            value={Courier.key}
            checked={delivery === Courier.key}
            onChange={() => {
              setDelivery(Courier.key);
              setOpen(false);
              setSelected(OrderSelectTitle.courier);
            }}
          />
          {Courier.value}
        </RadioCard>

        <RadioCard $active={delivery === PickUp.key}>
          <HiddenRadio
            type="radio"
            name="delivery"
            value={PickUp.key}
            checked={delivery === PickUp.key}
            onChange={() => {
              setDelivery(PickUp.key);
              setOpen(false);
              setSelected(OrderSelectTitle.pickup);
            }}
          />
          {PickUp.value}
        </RadioCard>
      </DeliverySelectorContainer>
    </>
  );
};
