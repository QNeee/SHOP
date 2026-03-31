import { type FC, type ChangeEvent, useState, useEffect, useRef } from 'react';
import { Container, Icon } from './ValidatedInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';
import type { FormAction } from '../formReducer';
import type { DataForm } from '../../../types';
import { TextInput } from './TextInput/TextInput';
import { PhoneInput } from './PhoneInput/PhoneInput';


interface ValidatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isValid: boolean | null;
  name: string;
  submit: boolean;
  setFormChecked: Function;
  dispatch?: React.ActionDispatch<[action: FormAction]>;
}

export const ValidatedInput: FC<ValidatedInputProps> = ({
  value,
  placeholder,
  isValid,
  name,
  submit,
  setFormChecked,
  dispatch,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showBorder, setShowBorder] = useState(isValid);
  const showIcon = isFocused || isValid !== null || submit;
  const phoneRef = useRef<HTMLInputElement>(null);
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    const [sectionStr, field] = e.currentTarget.name.split(',');
    const section = sectionStr as keyof DataForm;
    dispatch?.({ type: 'SET_FIELD', section, field, value });
  };
  useEffect(() => {
    const [section, field] = name.split(',');
    setFormChecked((prev: any) => {
      if (!field) {
        return {
          ...prev,
          [section]: isValid,
        };
      }

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: isValid,
        },
      };
    });
    if (isValid === null) setIsFocused(false)
    setShowBorder(isValid);
  }, [isValid, name, setFormChecked]);
  const isInputPhone = name.split(',')[1] === "phone";
  return (
    <Container>
      {!isInputPhone ? <TextInput value={value} onChange={onChangeInput} placeholder={placeholder} isValid={isValid}
        name={name} setIsFocused={setIsFocused} setShowBorder={setShowBorder} showBorder={showBorder} /> :
        <PhoneInput inputRef={phoneRef} dispatch={dispatch} showBorder={showBorder} value={value} placeholder={placeholder}
          isValid={isValid} setIsFocused={setIsFocused} setShowBorder={setShowBorder} />}
      {showIcon && <Icon $valid={isValid}>{isValid ? <Ok /> : <Error />}</Icon>}
    </Container>
  );
};
