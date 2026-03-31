import { useEffect, useState, type FC } from 'react';
import { AddIcon } from '../../Generic/Icons/OrderFormsIcons';
import { AddCardContainer } from './ValidatedCardContainer.styled';
interface IValidatedCardContainer {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setScrollYPos: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  isValid: boolean | null;
  submit: boolean;
  setFormChecked: Function;
  name: string;
}
export const ValidatedCardContainer: FC<IValidatedCardContainer> = ({
  active,
  setActive,
  setScrollYPos,
  id,
  isValid,
  name,
  submit,
  setFormChecked,
}) => {
  const [showBorder, setShowBorder] = useState(isValid);
  console.log(isValid);
  useEffect(() => {
    setFormChecked((prev: any) => {
      return { ...prev, [name]: isValid };
    });
    setShowBorder(isValid === null && submit ? true : false);
  }, [isValid, setFormChecked, submit, setShowBorder, setFormChecked]);
  return (
    <AddCardContainer
      $active={active === id}
      $showBorder={showBorder}
      onClick={() => {
        setActive((prev) => (prev === id ? '' : id));
        setScrollYPos(window.scrollY);
      }}
    >
      <p>Нова картка</p>
      <AddIcon />
    </AddCardContainer>
  );
};
