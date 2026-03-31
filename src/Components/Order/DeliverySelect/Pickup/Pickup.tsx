import { useEffect, useState, type FC } from "react";
import { LocationIcon } from "../../../Generic/Icons/LocationIcon"
import { DeliverySelectContainer } from "../DeliverySelect.styled"
import { DeliveryCityContainer, DelivrySelectWerehouse, PasButton } from "./Pickup.styled"
import type { NPBranch } from "../../../../types";
import { getBranches, getNovaPoshtaCities } from "../../../fetch";
interface IPickup {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>;

}
export const Pickup: FC<IPickup> = ({ city, setCity }) => {
    const [dataBranch, setDataBranch] = useState<NPBranch[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState("");
    const fetchBranches = async () => {
        try {
            setLoading(true);
            const cityRefArr = await getNovaPoshtaCities(city);
            const cityRef = cityRefArr[0].Ref;
            const data = await getBranches(cityRef);
            setDataBranch(data);
            setSelectedBranch(dataBranch[0]?.Description);
        } catch (err) {
            console.error('Помилка отримання міста:', err);
            setDataBranch([]);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchBranches();
    }, [city]);
    return <><DeliverySelectContainer>
        <DeliveryCityContainer>
            <LocationIcon />
            <h3 style={{ color: "white" }}>Київ</h3>
        </DeliveryCityContainer>
        <PasButton>Змінити</PasButton>
    </DeliverySelectContainer>
        <DelivrySelectWerehouse>
            <h3>Самовивіз з поштоматів Нової Пошти</h3>
        </DelivrySelectWerehouse></>
}