import { useEffect, useState, type FC } from "react";
import { DelivrySelectWerehouse } from "./Pickup.styled"
import { getBranches, getNovaPoshtaCities } from "../../../fetch";
import { Loader } from "../../../Generic/Loader/Loader";
import { PickupSelect } from "./PickupSelect/PickupSelect";
import { PickupModal } from "./PickupModal/PickupModal";
import { ukraineCities } from "../../../../Helper";
import type { ModalSelectPickupItems } from "../../../../types";
import { NoPickupAvailable } from "./NoPickupAvailable";
interface IPickup {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;

}
export const Pickup: FC<IPickup> = ({ city, setCity }) => {
    const [dataBranch, setDataBranch] = useState<ModalSelectPickupItems>({ wh: [], city: ukraineCities });
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState<keyof ModalSelectPickupItems | "">("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const cityId = "city";
    const whId = "wh";
    const fetchBranches = async () => {
        try {
            setLoading(true);
            const cityRefArr = await getNovaPoshtaCities(city);
            const cityRef = cityRefArr[0].Ref;
            const data = await getBranches(cityRef);
            const needItems = data.map(items => items.Description);
            setDataBranch(prev => ({ ...prev, wh: needItems }));
            setSelectedBranch(needItems[0]);
        } catch (err) {
            console.error('Помилка отримання міста:', err);
            setDataBranch(prev => ({ ...prev, wh: [] }));
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBranches();
    }, [city]);
    return <>
        {loading ? <Loader /> : <PickupSelect id={cityId} setModal={setModal} text={city} />}
        <DelivrySelectWerehouse>
            <h3>Самовивіз з поштоматів Нової Пошти</h3>
            {dataBranch.wh.length > 0 ? <div>
                {loading ? <Loader /> : <PickupSelect id={whId} setModal={setModal} text={selectedBranch} />}
            </div> : <NoPickupAvailable />}
            {modal ? <PickupModal id={modal} setChange={modal == cityId ? setCity : setSelectedBranch} text={modal === cityId ? city : selectedBranch} items={dataBranch[modal]} setModal={setModal} /> : null}
        </DelivrySelectWerehouse></>
}