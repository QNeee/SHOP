import { useEffect, type FC } from 'react';
import { ChangeList } from './ChangeColorList.styled';

interface IChangeColorList {
  listRef: React.RefObject<HTMLUListElement | null>;
  setPointer: Function;
  pointer: number;
  id: string;
}
export const ChangeColorList: FC<IChangeColorList> = ({ listRef, pointer, setPointer, id }) => {
  const onClickCircle = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    if (pointer == parseInt(target.id) || target.id == 'list') return;
    setPointer(parseInt(target.id));
  };
  useEffect(() => {
    if (!listRef.current) return;

    Array.from(listRef.current.children).forEach((li) => {
      (li as HTMLElement).style.backgroundColor = li.id === pointer.toString() ? 'blue' : 'white';
    });
  }, [pointer]);
  return (
    <ChangeList ref={listRef} onClick={onClickCircle} id={id}>
      <li id="0"></li>
      <li id="1"></li>
      <li id="2"></li>
    </ChangeList>
  );
};
