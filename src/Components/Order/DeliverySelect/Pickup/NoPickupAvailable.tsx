import type { FC } from 'react';
import { NoPickupAvailableContainer } from './NoPickupAvailable.styled';
interface INoPickupAvailable {
  errorMessage: string;
}
export const NoPickupAvailable: FC<INoPickupAvailable> = ({ errorMessage }) => {
  return (
    <NoPickupAvailableContainer>
      {errorMessage || 'В даному місті не працює доставка в поштомати'}
    </NoPickupAvailableContainer>
  );
};
