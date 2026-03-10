import { useState, type FC } from 'react';
import {
  OptionsList,
  SelectContainer,
  SelectedText,
  SelectHeader,
  Option,
  Arrow,
} from './DeliveryTimeSelector.styled';
import type { FormAction } from '../formReducer';

interface ITimeSelectProps {
  options: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: (action: FormAction) => void;
}
export const TimeSelect: FC<ITimeSelectProps> = ({ options, open, dispatch, setOpen }) => {
  const choseTime = 'Оберіть час';
  const [selected, setSelected] = useState(choseTime);
  return (
    <SelectContainer>
      <SelectHeader>
        <SelectedText>{selected}</SelectedText>
        <Arrow style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>{'>'}</Arrow>
      </SelectHeader>

      {open && (
        <OptionsList>
          {options.map((option) => (
            <Option
              key={option}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(option);
                dispatch({ type: 'SET_TIME', time: option });
                setOpen(false);
              }}
            >
              {option}
            </Option>
          ))}
        </OptionsList>
      )}
    </SelectContainer>
  );
};
