import { type FC, useState } from 'react';
import { StyledIMaskInput } from './PhoneInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';
import { Container, Icon } from '../ValidatedInput/ValidatedInput.styled';

interface PhoneInputProps {
  value: string;
  dispatch: any;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  isValid: boolean | null;
  submit: boolean;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  dispatch,
  placeholder,
  inputRef,
  isValid,
  submit,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const showIcon = isFocused || isValid !== null || submit;

  return (
    <Container>
      <StyledIMaskInput
        mask="+38 (000) 000-00-00"
        unmask={true}
        value={value}
        onBlur={() => setIsFocused(true)}
        onAccept={(val: string) =>
          dispatch({
            type: 'SET_FIELD',
            section: 'contactData',
            field: 'phone',
            value: val,
          })
        }
        placeholder={placeholder}
        inputRef={inputRef}
      />

      {showIcon && (
        <Icon style={{ bottom: 11 }} $valid={isValid}>
          {isValid ? <Ok /> : <Error />}
        </Icon>
      )}
    </Container>
  );
};
