import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { catalog, main } from '../Helper';

export const CatalogPage = () => {
  const path = main + ' ' + '/' + ' ' + catalog;
  return (
    <GenericRoute path={path} title={catalog}>
      <></>
    </GenericRoute>
  );
};
