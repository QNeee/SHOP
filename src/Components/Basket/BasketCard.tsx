import { type FC } from 'react';
import type { DeletedItemFromBaket, ProductItem } from '../../types';
import {
  BaskerCardContainer,
  IconAndCounterContainer,
  IconContainer,
  ImageContainer,
  InfoContainer,
  InfoPriceContainer,
  PriceContainer,
} from './BasketCard.styled';
import { InputCheckbox } from './Basket.styled';
import { discountCalculate } from '../../Helper';
import { BasketIcon } from '../Generic/Icons/BasketIcon';
import { Counter } from './Counter';
import { ImageGenericContainer } from '../Generic/ImageGenericContainer/ImageGeneticContainer';
import { OldPrice, Price } from '../Products/Cost.styled';

interface IBasketCardProps {
  item: ProductItem;
  checked: boolean;
  onChange: (id: string, value: boolean) => void;
  onClickDeleteOne: (obj: DeletedItemFromBaket) => void;
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
    onChange(item.id, e.target.checked);
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
        <InfoPriceContainer>
          <p>{item.title}</p>
          <PriceContainer>
            <Price>{item.price + '$'}</Price>
            <OldPrice style={{ marginTop: '5px', marginLeft: '8px' }}>
              {discountCalculate(item.price, item.discount.percentage) + '$'}
            </OldPrice>
          </PriceContainer>
        </InfoPriceContainer>
        <IconAndCounterContainer>
          <IconContainer>
            <BasketIcon onClickDeleteOne={onClickDeleteOne} item={item} />
          </IconContainer>
          <Counter
            max={item.inStockCount}
            itemId={item.id}
            itemType={item.type}
            setLocalStorageItems={setLocalStorageItems}
          />
        </IconAndCounterContainer>
      </InfoContainer>
    </BaskerCardContainer>
  );
};
