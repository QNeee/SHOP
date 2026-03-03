import { useEffect, useState } from 'react';

export const useIsmobileWidth = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  const isDesktop = 1280;
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < isDesktop;
};

export const AdBannerId = 'AdBanner';
export const CatalogId = 'Catalog';
export const SharesId = 'Shares';
