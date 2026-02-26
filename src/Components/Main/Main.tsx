import { AdBanner } from '../AdBanner/AdBanner';
import { Catalog } from '../Catalog/Catalog';
import { Shares } from '../Shares/Shares';

export const Main = () => {
  return (
    <div>
      <AdBanner />
      <Catalog />
      <Shares />
    </div>
  );
};
