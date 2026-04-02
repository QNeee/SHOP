import { ModalOverlay } from '../../../DeliverySelect/Pickup/PickupModal/Pickupmodal.styled';
import {
  DeleteCardModalContainer,
  DeleteCardTitle,
  DeleteCardButtons,
  DeleteButtonYes,
  DeleteButtonNo,
} from './DeleteCardModal.styled';

interface IDeleteCardModal {
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteCardModal = ({ onConfirm, onCancel }: IDeleteCardModal) => {
  return (
    <ModalOverlay onClick={onCancel}>
      <DeleteCardModalContainer onClick={(e) => e.stopPropagation()}>
        <DeleteCardTitle>Ви точно хочете видалити картку?</DeleteCardTitle>

        <DeleteCardButtons>
          <DeleteButtonNo type="button" onClick={onCancel}>
            Ні
          </DeleteButtonNo>

          <DeleteButtonYes type="button" onClick={onConfirm}>
            Так
          </DeleteButtonYes>
        </DeleteCardButtons>
      </DeleteCardModalContainer>
    </ModalOverlay>
  );
};
