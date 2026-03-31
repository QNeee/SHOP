
import { type FC } from "react";
import { LocationIcon } from "../../../../Generic/Icons/LocationIcon"
import { DeliveryCityContainer, DeliverySelectContainer, PasButton } from "./PickupSelect.styled"
import type { ModalSelectPickupItems } from "../../../../../types";

interface IPickupSelect {
    text: string;
    setModal: React.Dispatch<React.SetStateAction<"" | keyof ModalSelectPickupItems>>
    id: keyof ModalSelectPickupItems;
}

export const PickupSelect: FC<IPickupSelect> = ({ text, setModal, id }) => {
    return <DeliverySelectContainer>
        <DeliveryCityContainer>
            <LocationIcon />
            <h3 style={{ color: "white" }}>{text}</h3>
        </DeliveryCityContainer>
        <PasButton onClick={() => setModal(id)}>Змінити</PasButton>
    </DeliverySelectContainer>
}