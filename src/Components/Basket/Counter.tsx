import { useEffect, useState, type FC } from 'react';
import { CounterButton, CounterContainer, CounterValue } from './Counter.styled';
import type { LocalStorageItem, LocalStorageItemCategory } from '../../types';
import { localStorageBaket, localStorageName } from '../../Helper';

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

  const increase = () => {
    setValue((prev) => Math.min(prev + 1, max));
  };
  const decrease = () => {
    setValue((prev) => Math.max(prev - 1, min));
  };
  useEffect(() => {
    setLocalStorageItems((prev: LocalStorageItem) => {
      const items = {
        ...prev[localStorageBaket][itemType as keyof LocalStorageItemCategory],
        [itemId]: value,
      };

      const newData = {
        ...prev,
        [localStorageBaket]: {
          ...prev[localStorageBaket],
          [itemType]: items,
        },
      };

      localStorage.setItem(localStorageName, JSON.stringify(newData));
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
