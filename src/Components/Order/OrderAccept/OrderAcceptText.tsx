import type { FC } from 'react';
import { PurpleText } from './OrderAcceptText.styled';

interface IOrderAcceptText {
  message: string;
  date: string;
  time: string | null;
}
export const OrderAcceptText: FC<IOrderAcceptText> = ({
  message,
  date,
  time,
}) => {
  return (
    <>
      <p>
        Доставка очікується: <PurpleText>{date}</PurpleText>
      </p>
      {time ? (
        <p>
          Час доставки: <PurpleText>{time}</PurpleText>
        </p>
      ) : null}
      <p>{message}</p>
    </>
  );
};
