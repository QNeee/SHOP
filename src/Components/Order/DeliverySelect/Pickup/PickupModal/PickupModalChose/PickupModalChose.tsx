import { useMemo, useState, type FC } from 'react';
import {
  PickupModalChoseInput,
  PickupModalWrapper,
  SelectContainer,
  SelectContainerFlex,
} from './PickupModalChose.styled';

import { SelectIcon } from '../../../../../Generic/Icons/SelectIcon';
import { PickupModalChoseSelect } from './PickupModalChoseSelext';
import type { ModalSelectPickupItems } from '../../../../../../types';

interface IPickupModalChose {
  text: string;
  items: string[];
  id: string;
  setModal: React.Dispatch<
    React.SetStateAction<'' | keyof ModalSelectPickupItems>
  >;
  setChange: React.Dispatch<React.SetStateAction<string>>;
}

export const PickupModalChose: FC<IPickupModalChose> = ({
  items,
  text,
  id,
  setModal,
  setChange,
}) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (id === 'wh' && value) {
        const str = item.split(' ')[1];
        const match = /^\d+$/.test(str);
        if (match) return true;
      }

      return item.toLowerCase().includes(value.toLowerCase());
    });
  }, [items, value, id]);
  return (
    <PickupModalWrapper>
      <SelectContainer>
        <SelectContainerFlex
          onClick={() => {
            setIsOpen((prev) => {
              if (isOpen) setValue('');
              return !prev;
            });
          }}
        >
          <p>{text}</p>
          <div>
            <SelectIcon />
          </div>
        </SelectContainerFlex>

        {isOpen && (
          <>
            <SelectContainerFlex style={{ marginTop: '10px' }}>
              <PickupModalChoseInput
                onChange={(e) => setValue(e.currentTarget.value)}
                placeholder="Введіть адресу або номер відділення"
              />
            </SelectContainerFlex>
            <PickupModalChoseSelect
              setChange={setChange}
              setModal={setModal}
              items={filteredItems || []}
            />
          </>
        )}
      </SelectContainer>
    </PickupModalWrapper>
  );
};
