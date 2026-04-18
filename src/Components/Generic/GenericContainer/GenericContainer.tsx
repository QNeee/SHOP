import { type ComponentType, type FC, type ReactNode } from 'react';
import {
  Border,
  ButtonContainer,
  GenericContainer,
  GenericTextContainer,
} from './GenericContainer.styled';
import { BasketButton } from '../../Basket/Basket.styled';
import { useNavigate } from 'react-router-dom';
import { initialOrdered, useIsmobileWidth } from '../../../Helper';
import type { Ordered } from '../../../types';

interface IGenericContainer {
  title: string;
  Icon: ComponentType;
  children: ReactNode;
  navigateTo: string;
  buttonText: string;
  func?: React.Dispatch<React.SetStateAction<Ordered>>;
  Reload?: ComponentType;
}

export const GenericContainerElem: FC<IGenericContainer> = ({
  title,
  Icon,
  navigateTo,
  func,
  children,
  buttonText,
  Reload,
}) => {
  const navigate = useNavigate();
  const isMobile = useIsmobileWidth();
  return (
    <>
      <GenericContainer>
        <h3>{title}</h3>
        <Icon />
        <GenericTextContainer>{children}</GenericTextContainer>
        <ButtonContainer>
          {Reload ? <Reload /> : null}
          <BasketButton
            onClick={() => {
              navigate(navigateTo);
              if (func) func(initialOrdered);
            }}
          >
            {buttonText}
          </BasketButton>
        </ButtonContainer>
      </GenericContainer>
      {isMobile ? <Border></Border> : null}
    </>
  );
};
