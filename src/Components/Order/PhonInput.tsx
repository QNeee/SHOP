import type { FC } from 'react';

import { StyledIMaskInput } from './PhoneInput.styled';
import type { DataForm } from '../../types';

interface PhoneInputProps {
  value: string;
  setForm: React.Dispatch<React.SetStateAction<DataForm>>;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const PhoneInput: FC<PhoneInputProps> = ({ value, setForm, placeholder, inputRef }) => {
  return (
    <StyledIMaskInput
      mask="+38 (000) 000-00-00"
      unmask={true}
      value={value}
      onAccept={(val: string) =>
        setForm((prev) => ({
          ...prev,
          contactData: {
            ...prev.contactData,
            phone: val,
          },
        }))
      }
      placeholder={placeholder}
      inputRef={inputRef}
    />
  );
};
