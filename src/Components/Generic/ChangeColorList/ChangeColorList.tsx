import { useState, type FC } from 'react';
import { ChangeList, ChangeListItem } from './ChangeColorList.styled';

interface IChangeColorList {
  itemPhotos: Record<string, string[]>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}
export const ChangeColorList: FC<IChangeColorList> = ({
  itemPhotos,
  setColor,
}) => {
  const [active, setActive] = useState('0');
  const onClickCircle = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    color: string,
  ) => {
    setActive(e.currentTarget.id);
    setColor(color);
  };
  return (
    <ChangeList>
      {Object.keys(itemPhotos).map((it, index) => (
        <ChangeListItem
          onClick={(e) => onClickCircle(e, it)}
          $backColor={it}
          $active={active === index.toString()}
          key={index}
          id={index.toString()}
        ></ChangeListItem>
      ))}
    </ChangeList>
  );
};
