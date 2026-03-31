import { useState, type FC } from 'react';
import { PickUp } from '../../../Helper';
import { Pickup } from './Pickup/Pickup';

interface IDeliverySelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  delivery: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export const DeliverySelect: FC<IDeliverySelectProps> = ({
  delivery,
}) => {
  const [city, setCity] = useState("Київ")
  return (
    <>
      {delivery === PickUp.key ? <Pickup city={city} setCity={setCity} />
        : null}
    </>

  );
};
