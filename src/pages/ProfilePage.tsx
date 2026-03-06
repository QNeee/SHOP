import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { main, profile } from '../Helper';

export const ProfilePage = () => {
  const path = main + ' ' + '/' + ' ' + profile;
  return (
    <GenericRoute path={path} title={profile}>
      <></>
    </GenericRoute>
  );
};
