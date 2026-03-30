import { useEffect, useState, type FC } from 'react';
import type { NPBranch } from '../../../types';
import { getBranches, getNovaPoshtaCities } from '../../fetch';
import { PickUp } from '../../../Helper';
import { Loader } from '../../Generic/Loader/Loader';
import { LocationIcon } from '../../Generic/Icons/LocationIcon';
import { DeliveryCityContainer, DeliverySelectContainer, DelivrySelectWerehouse, PasButton } from './DeliverySelect.styled';

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
  const [city, setCity] = useState("Київ")

  const fetchBranches = async () => {
    try {
      setLoading(true);
      const cityRefArr = await getNovaPoshtaCities(city);
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
  console.log(dataBranch);
  useEffect(() => {
    if (delivery === PickUp.key) fetchBranches();
    else setDataBranch([]);
  }, [city, delivery]);

  return (
    <>
      {delivery === PickUp.key ? <DeliverySelectContainer>
        <DeliveryCityContainer>
          <LocationIcon />
          <h3 style={{ color: "white" }}>Київ</h3>
        </DeliveryCityContainer>
        <PasButton>Змінити</PasButton>
      </DeliverySelectContainer> : null}
      <DelivrySelectWerehouse>
        <h3>Самовивіз з поштоматів Нової Пошти</h3>
      </DelivrySelectWerehouse>
    </>
    // <SelectBox>
    //   {delivery === PickUp.key ? (
    //     <SelectHeader onClick={() => setOpen((prev) => !prev)}>
    //       <SelectTitle>{selected}</SelectTitle>
    //       <Arrow $open={open}>{'>'}</Arrow>
    //     </SelectHeader>
    //   ) : null}

    //   {open && (
    //     <Options>
    //       {loading ? (
    //         <Loader />
    //       ) : (
    //         dataBranch.map((option, index) => (
    //           <Option
    //             key={index}
    //             onClick={(e) => {
    //               e.stopPropagation();
    //               setSelected(option.Description);
    //               setOpen(false);
    //             }}
    //           >
    //             {option.Description}
    //           </Option>
    //         ))
    //       )}
    //     </Options>
    //   )}
    // </SelectBox>
  );
};
