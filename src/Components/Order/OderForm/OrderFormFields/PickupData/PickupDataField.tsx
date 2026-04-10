import type { FC } from 'react';
import type { FormAction } from '../../../formReducer';
import { CourierAdress } from './CourierAdress/CourierAdress';
import { DeliveryTime } from './DeliveryTime/DeliveryTime';
import { PickUpDataContainer } from './PickupData.styled';
import { DeliveryDate } from './DeliveryDate/DeliveryDate';
import type { CheckFormOrder, DeliveryAdress } from '../../../../../types';

interface IPickupDataField {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  dispatch: React.ActionDispatch<[action: FormAction]>;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  adress: DeliveryAdress;
  submit: boolean;
  dates: {
    start: Date;
    end: Date;
  };
}
export const PickupDataField: FC<IPickupDataField> = ({
  setOpen,
  open,
  dispatch,
  setCheckFormOrdr,
  onChangeInput,
  submit,
  adress,
  dates,
}) => {
  return (
    <PickUpDataContainer>
      <CourierAdress
        deliveryAdress={adress}
        setCheckFormOrdr={setCheckFormOrdr}
        submit={submit}
        onChangeInput={onChangeInput}
      />
      <div>
        <DeliveryTime setOpen={setOpen} open={open} dispatch={dispatch} />
        <DeliveryDate dateStart={dates.start} dateEnd={dates.end} />
      </div>
    </PickUpDataContainer>
  );
};
