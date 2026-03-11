import { type FC, useEffect, useState } from 'react';
import { StyledIMaskInput } from './PhoneInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';
import { Container, Icon } from '../ValidatedInput/ValidatedInput.styled';
import type { CheckFormOrder } from '../../../types';

interface PhoneInputProps {
  value: string;
  dispatch: any;
  placeholder?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  isValid: boolean | null;
  submit: boolean;
  name: string;
  setCheckFormOrdr: React.Dispatch<React.SetStateAction<CheckFormOrder>>;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  value,
  dispatch,
  placeholder,
  inputRef,
  isValid,
  name,
  submit,
  setCheckFormOrdr,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const showIcon = isFocused || isValid !== null || submit;
  useEffect(() => {
    const [id, field] = name.split(',');
    setCheckFormOrdr((prev: any) => {
      return {
        ...prev,
        [id]: {
          ...prev[id],
          [field]: isValid,
        },
      };
    });
  }, [isValid]);
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
