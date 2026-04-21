import { type FC } from 'react';
import type { ProductItem } from '../../../types';
import {
  BaskerCardContainer,
  IconAndCounterContainer,
  IconContainer,
  ImageContainer,
  InfoContainer,
} from './BasketCard.styled';
import { discountCalculate } from '../../../Helper';
import { BasketIcon } from '../../Generic/Icons/BasketIcon';
import { ImageGenericContainer } from '../../Generic/ImageGenericContainer/ImageGeneticContainer';
import { OldPrice, Price } from '../../Products/Cost.styled';
import { Counter } from './BasketCardInfo/Counter/Counter';
import { InputCheckbox } from '../Basket.styled';
import { PriceInfo } from './BasketCardInfo/PriceInfo/PriceInfo';

interface IBasketCardProps {
  item: ProductItem;
  checked: boolean;
  onChange: (id: string, value: boolean) => void;
  onClickDeleteOne: (id: string) => void;
  setLocalStorageItems: Function;
}

export const BasketCard: FC<IBasketCardProps> = ({
  item,
  checked,
  onChange,
  onClickDeleteOne,
  setLocalStorageItems,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(item.productVariantId, e.target.checked);
  };

  return (
    <BaskerCardContainer>
      <ImageContainer>
        <ImageGenericContainer title={item.title} itemPhotos={item.images} />
      </ImageContainer>
      <InfoContainer>
        <InputCheckbox
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            marginRight: '20px',
            marginTop: '20px',
          }}
          checked={checked}
          onChange={handleChange}
          type="checkbox"
        />
        <PriceInfo
          title={item.title}
          price={item.price}
          discountPercentage={item.discountPercentage}
        />
        <IconAndCounterContainer>
          <IconContainer>
            <BasketIcon onClickDeleteOne={onClickDeleteOne} item={item} />
          </IconContainer>
          <Counter
            max={item.stock}
            itemId={item.productVariantId}
            setLocalStorageItems={setLocalStorageItems}
          />
        </IconAndCounterContainer>
      </InfoContainer>
    </BaskerCardContainer>
  );
};
