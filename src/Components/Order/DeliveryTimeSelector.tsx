import { useState, type FC } from 'react';
import {
  OptionsList,
  SelectContainer,
  SelectedText,
  SelectHeader,
  Option,
  Arrow,
} from './DeliveryTimeSelector.styled';

interface ITimeSelectProps {
  options: string[];
}

export const TimeSelect: FC<ITimeSelectProps> = ({ options }) => {
  const [open, setOpen] = useState(false);
  const choseTime = 'Оберіть час';
  const [selected, setSelected] = useState(options[0]);
  return (
    <SelectContainer>
      <SelectHeader onClick={() => setOpen((prev) => !prev)}>
        <SelectedText>{selected}</SelectedText>
        <Arrow
          onClick={() => setSelected(choseTime)}
          style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          {'>'}
        </Arrow>
      </SelectHeader>

      {open && (
        <OptionsList>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => {
                setSelected(option);
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
