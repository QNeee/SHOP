import { useEffect, useState, type FC } from 'react';
import { AddIcon } from '../../Generic/Icons/OrderFormsIcons';
import { AddCardContainer } from './ValidatedCardContainer.styled';
import type { Actives } from '../../../types';
interface IValidatedCardContainer {
  actives: Actives
  setActives: React.Dispatch<React.SetStateAction<Actives>>
  setScrollYPos: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  isValid: boolean;
  submit: boolean;
  setFormChecked: Function;
  name: string;
}
export const ValidatedCardContainer: FC<IValidatedCardContainer> = ({
  actives,
  setActives,
  setScrollYPos,
  id,
  isValid,
  name,
  submit,
  setFormChecked,
}) => {
  const [showBorder, setShowBorder] = useState(false);
  useEffect(() => {
    setFormChecked((prev: any) => {
      return { ...prev, [name]: isValid };
    });
    const border = submit && !isValid ? true : false;
    setShowBorder(border);
  }, [isValid, setFormChecked, submit, setShowBorder, setFormChecked]);
  return (
    <AddCardContainer
      $active={actives.containerId === id}
      $showBorder={showBorder}
      onClick={() => {
        setActives(perv => {
          if (perv.containerId === id) return { ...perv, containerId: '' };
          return { ...perv, containerId: id };
        })
        setScrollYPos(window.scrollY);
      }}
    >
      <p>Нова картка</p>
      <AddIcon />
    </AddCardContainer>
  );
};
