import { useEffect, useState, type FC } from 'react';
import {
  SelectBox,
  SelectHeader,
  SelectTitle,
  Arrow,
  Options,
  Option,
} from './DeliverySelect.styled';
import type { NPBranch } from '../../types';
import { getBranches, getNovaPoshtaCities, getUserCity } from '../fetch';
import { PickUp } from '../../Helper';
import { Loader } from '../Generic/Loader/Loader';

interface IDeliverySelectProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  delivery: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export const DeliverySelect: FC<IDeliverySelectProps> = ({
  setOpen,
  open,
  selected,
  setSelected,
  delivery,
}) => {
  const [dataBranch, setDataBranch] = useState<NPBranch[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const userCity = await getUserCity();
      const cityRefArr = await getNovaPoshtaCities(userCity);
      const cityRef = cityRefArr[0].Ref;
      const data = await getBranches(cityRef);
      setDataBranch(data);
    } catch (err) {
      console.error('Помилка отримання міста:', err);
      setDataBranch([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (delivery === PickUp.key && open) fetchBranches();
    else setDataBranch([]);
  }, [open]);

  return (
    <SelectBox>
      {delivery === PickUp.key ? (
        <SelectHeader onClick={() => setOpen((prev) => !prev)}>
          <SelectTitle>{selected}</SelectTitle>
          <Arrow $open={open}>{'>'}</Arrow>
        </SelectHeader>
      ) : null}

      {open && (
        <Options>
          {loading ? (
            <Loader />
          ) : (
            dataBranch.map((option, index) => (
              <Option
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(option.Description);
                  setOpen(false);
                }}
              >
                {option.Description}
              </Option>
            ))
          )}
        </Options>
      )}
    </SelectBox>
  );
};
