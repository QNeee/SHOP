import { useRef, useState, type FC } from 'react';
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
import { ChangeColorList } from '../ChangeColorList';
import { InputCheckbox } from './Basket.styled';
import { OldPrice, Price } from '../Products/ProductCard.styled';
import { discountCalculate } from '../../Helper';
import { BasketIcon } from './BasketIcon';
import { Counter } from './Counter';

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
  const [pointer, setPointer] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(item.id, e.target.checked);
  };

  return (
    <BaskerCardContainer>
      <ImageContainer>
        <img src={item.photos[320][pointer]} loading="lazy" alt={item.type} />
        <ChangeColorList listRef={listRef} pointer={pointer} setPointer={setPointer} id={'list'} />
      </ImageContainer>
      <InfoContainer>
        <InputCheckbox
          style={{ position: 'absolute', top: 0, right: 0, marginRight: '20px', marginTop: '20px' }}
          checked={checked}
          onChange={handleChange}
          type="checkbox"
        />
        <InfoPriceContainer>
          <p>{item.text}</p>
          <PriceContainer>
            <Price>{item.price + item.valute}</Price>
            <OldPrice style={{ marginTop: '5px', marginLeft: '8px' }}>
              {discountCalculate(item.price, item.discount) + item.valute}
            </OldPrice>
          </PriceContainer>
        </InfoPriceContainer>
        <IconAndCounterContainer>
          <IconContainer>
            <BasketIcon onClickDeleteOne={onClickDeleteOne} item={item} />
          </IconContainer>
          <Counter
            itemId={item.id}
            itemType={item.type}
            setLocalStorageItems={setLocalStorageItems}
          />
        </IconAndCounterContainer>
      </InfoContainer>
    </BaskerCardContainer>
  );
};
