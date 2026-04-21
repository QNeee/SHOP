import type { FC } from 'react';
import { CatalogItemInfoPContainer } from './CatalogItemOptions.styled';
interface ICatalogItemOptions {
  optionsArr: string[];
}
export const CatalogItemOptions: FC<ICatalogItemOptions> = ({ optionsArr }) => {
  return (
    <>
      <CatalogItemInfoPContainer>
        {optionsArr.map((it, index) => (
          <p key={index}>{it}</p>
        ))}
      </CatalogItemInfoPContainer>
    </>
  );
};
