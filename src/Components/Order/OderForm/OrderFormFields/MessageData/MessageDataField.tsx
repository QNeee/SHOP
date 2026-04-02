import type { FC } from 'react';
import { SectionTitle } from '../../OrderForm.styled';
import { TextArea } from './MessageDataField.styled';

interface IMessageDataField {
  message: string;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
export const MessageDataField: FC<IMessageDataField> = ({
  message,
  onChangeInput,
}) => {
  return (
    <>
      <SectionTitle>Побажання</SectionTitle>
      <TextArea
        onChange={onChangeInput}
        name="deliveryData,message"
        placeholder="Повідомлення ..."
        value={message}
      />
    </>
  );
};
