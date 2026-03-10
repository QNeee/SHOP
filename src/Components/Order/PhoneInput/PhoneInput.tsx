import type { FC } from 'react';

import { StyledIMaskInput } from './PhoneInput.styled';
import type { FormAction } from '../formReducer';

interface PhoneInputProps {
  value: string;
  dispatch: (action: FormAction) => void;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const PhoneInput: FC<PhoneInputProps> = ({ value, dispatch, placeholder, inputRef }) => {
  return (
    <StyledIMaskInput
      mask="+38 (000) 000-00-00"
      unmask={true}
      value={value}
      onAccept={(val: string) =>
        dispatch({ type: 'SET_FIELD', section: 'contactData', field: 'phone', value: val })
      }
      placeholder={placeholder}
      inputRef={inputRef}
    />
  );
};
