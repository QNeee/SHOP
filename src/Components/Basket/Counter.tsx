import { useEffect, useState, type FC } from 'react';
import { CounterButton, CounterContainer, CounterValue } from './Counter.styled';
import { localStorageItemsKeys } from '../../Helper';
import type { LocalStorageItemShop, LocalStorageItemShopCategory } from '../../types';

interface ICounterProps {
  initial?: number;
  min?: number;
  max?: number;
  setLocalStorageItems: Function;
  itemType: string;
  itemId: string;
}

export const Counter: FC<ICounterProps> = ({
  initial = 1,
  min = 1,
  max = 99,
  itemId,
  itemType,
  setLocalStorageItems,
}) => {
  const [value, setValue] = useState(initial);
  const { shopItems, baket } = localStorageItemsKeys;
  const increase = () => {
    setValue((prev) => Math.min(prev + 1, max));
  };
  const decrease = () => {
    setValue((prev) => Math.max(prev - 1, min));
  };
  useEffect(() => {
    setLocalStorageItems((prev: LocalStorageItemShop) => {
      const items = {
        ...prev[baket][itemType as keyof LocalStorageItemShopCategory],
        [itemId]: value,
      };

      const newData = {
        ...prev,
        [baket]: {
          ...prev[baket],
          [itemType]: items,
        },
      };

      localStorage.setItem(shopItems, JSON.stringify(newData));
      return newData;
    });
  }, [value]);
  return (
    <CounterContainer>
      <CounterButton onClick={decrease} disabled={value <= min}>
        -
      </CounterButton>
      <CounterValue>{value}</CounterValue>
      <CounterButton onClick={increase} disabled={value >= max}>
        +
      </CounterButton>
    </CounterContainer>
  );
};
