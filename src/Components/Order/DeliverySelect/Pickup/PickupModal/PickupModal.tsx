import { type FC } from "react"
import { CloseButton, ModalContainer, ModalOverlay } from "./Pickupmodal.styled"
import { CloseIcon } from "../../../../Generic/Icons/CloseIcon"
import type { ModalSelectPickupItems } from "../../../../../types";
import { PickupModalChose } from "./PickupModalChose/PickupModalChose";

interface IPickupModal {
    setModal: React.Dispatch<React.SetStateAction<"" | keyof ModalSelectPickupItems>>
    items: string[];
    setChange: React.Dispatch<React.SetStateAction<string>>
    text: string;
    id: string;
}

export const PickupModal: FC<IPickupModal> = ({ setModal, items, text, setChange, id }) => {
    return <ModalOverlay onClick={() => setModal("")}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setModal("")}><CloseIcon /></CloseButton>
            <PickupModalChose setChange={setChange} setModal={setModal} id={id} text={text} items={items} />
        </ModalContainer>
    </ModalOverlay>
}