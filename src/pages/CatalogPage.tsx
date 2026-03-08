import type { FC } from 'react';
import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { catalog, main } from '../Helper';

interface ICatalogPageProps {}
export const CatalogPage: FC<ICatalogPageProps> = ({}) => {
  const catalogPath = `${main} / ${catalog}`;
  return (
    <GenericRoute path={catalogPath} title={catalog}>
      <></>
    </GenericRoute>
  );
};
