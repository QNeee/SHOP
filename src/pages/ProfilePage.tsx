import { GenericRoute } from '../Components/GenericRoute/GenericRoute';
import { main, profile } from '../Helper';

export const ProfilePage = () => {
  const profilePath = `${main} / ${profile}`;
  return (
    <GenericRoute path={profilePath} title={profile}>
      <></>
    </GenericRoute>
  );
};
