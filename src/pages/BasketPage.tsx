import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main } from '../Helper';

export const BasketPage = () => {
  const basketPath = main + ' ' + '/' + ' ' + basket;
  return (
    <GenericRoute path={basketPath} title={basket}>
      <></>
    </GenericRoute>
  );
};
