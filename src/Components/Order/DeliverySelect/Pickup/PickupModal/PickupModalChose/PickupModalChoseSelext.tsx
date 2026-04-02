import type { FC } from 'react';
import { SelectDropdown, SelectItem } from './PickupModalChoseSelect.styled';
import type { ModalSelectPickupItems } from '../../../../../../types';

interface IPickupModalChoseSelect {
  items: string[];
  setModal: React.Dispatch<
    React.SetStateAction<'' | keyof ModalSelectPickupItems>
  >;
  setChange: React.Dispatch<React.SetStateAction<string>>;
}
export const PickupModalChoseSelect: FC<IPickupModalChoseSelect> = ({
  items,
  setModal,
  setChange,
}) => {
  return (
    <SelectDropdown>
      {items.length > 0 ? (
        items.map((item, index) => (
          <SelectItem
            key={index}
            onClick={() => {
              setModal('');
              setChange(item);
            }}
          >
            {item}
          </SelectItem>
        ))
      ) : (
        <p style={{ color: 'white' }}>не знайдено</p>
      )}
    </SelectDropdown>
  );
};
