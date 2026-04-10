import { useState, type FC } from 'react';
import { useIsmobileWidth } from '../../../Helper';
import { ChangeColorList } from '../ChangeColorList/ChangeColorList';

interface IImageGenericContainer {
  title: string;
  itemPhotos: Record<string, string[]>;
}

export const ImageGenericContainer: FC<IImageGenericContainer> = ({
  title,
  itemPhotos,
}) => {
  const [color, setColor] = useState('black');
  const isMobileWidth = useIsmobileWidth();
  const bounds = {
    width: isMobileWidth ? 144 : 169,
    height: isMobileWidth ? 158 : 216,
  };
  const makePhotoColor = () => {
    const itemPhoto = itemPhotos[color];
    if (itemPhoto.length > 1) {
      return isMobileWidth ? itemPhotos[color][0] : itemPhotos[color][1];
    } else {
      return itemPhotos[color][0];
    }
  };
  return (
    <>
      <img
        width={bounds.width}
        height={bounds.height}
        src={makePhotoColor()}
        loading="lazy"
        alt={title}
      />
      <ChangeColorList setColor={setColor} itemPhotos={itemPhotos} />
    </>
  );
};
