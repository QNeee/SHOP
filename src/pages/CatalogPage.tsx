import { type FC } from 'react';
import { GenericRoute } from '../Components/Generic/GenericRoute/GenericRoute';
import { catalogPhotos } from '../assets/Catalog/Catalog';
import { CatalogCard } from '../Components/Catalog/CatalogCard';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 200px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 600px;
  }
`;
interface ICatalogPageProps {}
export const CatalogPage: FC<ICatalogPageProps> = ({}) => {
  return (
    <GenericRoute>
      <Container>
        {catalogPhotos.map((item) => (
          <CatalogCard key={item.id} item={item} />
        ))}
      </Container>
    </GenericRoute>
  );
};
