import { useEffect, useState } from 'react';

export const AdBannerId = 'AdBanner';
export const CatalogId = 'Catalog';
export const SharesId = 'Shares';
export const isMobile = 320;
export const isDesktop = 1280;
export const useIsmobileWidth = (): boolean => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width < isDesktop;
};
