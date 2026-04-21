import { useEffect, useState, type FC } from 'react';
import {
  CounterButton,
  CounterContainer,
  CounterValue,
} from './Counter.styled';
import { localStorageItemsKeys } from '../../../../../Helper';
import type { LocalStorageItemShop } from '../../../../../types';

interface ICounterProps {
  initial?: number;
  min?: number;
  max: number;
  setLocalStorageItems: Function;
  itemId: string;
}

export const Counter: FC<ICounterProps> = ({
  initial = 1,
  min = 1,
  max = 99,
  itemId,
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
      const newData = {
        ...prev,
        [baket]: {
          ...prev[baket],
          [itemId]: value,
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
