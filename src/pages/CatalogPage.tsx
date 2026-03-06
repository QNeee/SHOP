import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { catalog, main } from '../Helper';

export const CatalogPage = () => {
  const catalogPath = `${main} / ${catalog}`;
  return (
    <GenericRoute path={catalogPath} title={catalog}>
      <></>
    </GenericRoute>
  );
};
