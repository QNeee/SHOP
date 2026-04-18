import type { FC } from 'react';
import type { Ordered } from '../../../types';
import { Paths } from '../../../Helper';
import { GenericContainerElem } from '../../Generic/GenericContainer/GenericContainer';
import { OrderAcceptIcon } from '../../Generic/Icons/OrderAcceptIcon';
import { OrderAcceptText } from './OrderAcceptText';
interface IOrderAccept {
  message: string;
  date: string;
  time: string | null;
  setOrdered: React.Dispatch<React.SetStateAction<Ordered>>;
}
export const OrderAccept: FC<IOrderAccept> = ({
  message,
  date,
  time,
  setOrdered,
}) => {
  const title = 'Заказ Оформлено';
  const buttonText = 'Перейти в каталог';
  return (
    <>
      <GenericContainerElem
        title={title}
        Icon={OrderAcceptIcon}
        navigateTo={Paths.catalog}
        buttonText={buttonText}
        func={setOrdered}
      >
        <OrderAcceptText message={message} date={date} time={time} />
      </GenericContainerElem>
    </>
  );
};
