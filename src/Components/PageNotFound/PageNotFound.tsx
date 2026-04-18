import { Paths } from '../../Helper';
import { GenericContainerElem } from '../Generic/GenericContainer/GenericContainer';
import { ErrorPageIcon } from '../Generic/Icons/ErrorPageIcon';
import { ReloadButtonIcon } from '../Generic/Icons/ReloadButtonIcon';
import { PageNotFoundText } from './PageNotFoundText';

export const PageNotFound = () => {
  const title = 'Помилка 404';
  const buttonText = 'Перезавантажити';

  return (
    <GenericContainerElem
      title={title}
      Icon={ErrorPageIcon}
      navigateTo={Paths.base}
      buttonText={buttonText}
      Reload={ReloadButtonIcon}
    >
      <PageNotFoundText />
    </GenericContainerElem>
  );
};
