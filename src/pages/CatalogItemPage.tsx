import { useSelector } from 'react-redux';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import { catalog, main } from '../Helper';
import { getCatalogItemPath } from '../Redux/app/appSelectors';

export const CatalogItemPage = () => {
  const catalogItemText = useSelector(getCatalogItemPath);
  const catalogItemPath = `${main} / ${catalog} / ${catalogItemText}`;
  return (
    <GenericRoute path={catalogItemPath} title={catalogItemText}>
      <></>
    </GenericRoute>
  );
};
