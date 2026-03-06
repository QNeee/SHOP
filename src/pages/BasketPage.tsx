import { Basket } from '../Components/Basket/Basket';
import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { basket, main } from '../Helper';

export const BasketPage = () => {
  const basketPath = `${main} / ${basket}`;
  return (
    <GenericRoute path={basketPath} title={basket}>
      <Basket
        item={{
          type: '',
          id: '',
          photos: {
            320: '',
            1280: '',
          },
          discount: 0,
          text: '',
          price: 0,
          valute: '',
          available: false,
        }}
      ></Basket>
    </GenericRoute>
  );
};
