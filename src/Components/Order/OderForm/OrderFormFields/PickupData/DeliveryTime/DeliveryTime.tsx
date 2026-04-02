import type { FC } from 'react';
import { AvailableTimesPickup } from '../../../../../../Helper';
import { TimeSelect } from '../../../../DeliveryTimeSelector/DeliveryTimeSelector';
import type { FormAction } from '../../../../formReducer';
import { DeliveryTimeSelectContainer } from './DeliveryTime.styled';
interface IDeliveryTime {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  dispatch: React.ActionDispatch<[action: FormAction]>;
}
export const DeliveryTime: FC<IDeliveryTime> = ({
  open,
  setOpen,
  dispatch,
}) => {
  return (
    <>
      <p>Час</p>
      <DeliveryTimeSelectContainer onClick={() => setOpen((prev) => !prev)}>
        <TimeSelect
          open={open}
          setOpen={setOpen}
          options={AvailableTimesPickup}
          dispatch={dispatch}
        />
      </DeliveryTimeSelectContainer>
    </>
  );
};
