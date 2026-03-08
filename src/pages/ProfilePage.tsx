import type { FC } from 'react';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import { main, profile } from '../Helper';
interface IProfilePageProps {}
export const ProfilePage: FC<IProfilePageProps> = ({}) => {
  const profilePath = `${main} / ${profile}`;
  return (
    <GenericRoute path={profilePath} title={profile}>
      <></>
    </GenericRoute>
  );
};
