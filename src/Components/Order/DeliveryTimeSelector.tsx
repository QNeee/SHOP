import { useState, type FC } from 'react';
import {
  OptionsList,
  SelectContainer,
  SelectedText,
  SelectHeader,
  Option,
  Arrow,
} from './DeliveryTimeSelector.styled';
import type { DataForm } from '../../types';

interface ITimeSelectProps {
  options: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setForm: React.Dispatch<React.SetStateAction<DataForm>>;
}
export const TimeSelect: FC<ITimeSelectProps> = ({ options, open, setForm, setOpen }) => {
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
                setForm((prev) => {
                  return {
                    ...prev,
                    deliveryData: {
                      ...prev.deliveryData,
                      deliveryTime: option,
                    },
                  };
                });
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
