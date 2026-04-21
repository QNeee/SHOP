import type { FC } from 'react';
import { BasketIcon } from '../../Generic/Icons/BasketIcon';
import {
  BasketContainer,
  BasketIconContainer,
  BasketIconText,
  InputContainer,
  StyledLabel,
} from './BasketCheck.styled';
import { InputCheckbox } from '../Basket.styled';
interface IBasketCheck {
  checkedAll: boolean;
  onClickDeleteAll: () => void;
  toggleAll: (value: boolean) => void;
}
export const BasketCheck: FC<IBasketCheck> = ({
  checkedAll,
  onClickDeleteAll,
  toggleAll,
}) => {
  return (
    <BasketContainer>
      <BasketIconContainer $checked={checkedAll} onClick={onClickDeleteAll}>
        <BasketIcon />
        <BasketIconText>Видалити</BasketIconText>
      </BasketIconContainer>
      <InputContainer>
        <StyledLabel htmlFor="deleteAll">
          Вибрати все
          <InputCheckbox
            checked={checkedAll}
            onChange={(e) => toggleAll(e.target.checked)}
            type="checkbox"
            id="deleteAll"
          />
        </StyledLabel>
      </InputContainer>
    </BasketContainer>
  );
};
