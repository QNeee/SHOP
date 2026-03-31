import { type FC, useState, useEffect, useRef } from 'react';
import { Container, Icon } from './ValidatedInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';
import type { FormAction } from '../formReducer';
import { TextInput } from './TextInput/TextInput';
import { PhoneInput } from './PhoneInput/PhoneInput';


interface ValidatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  isValid: boolean | null;
  name: string;
  submit: boolean;
  setFormChecked: Function;
  dispatch?: React.ActionDispatch<[action: FormAction]>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const ValidatedInput: FC<ValidatedInputProps> = ({
  value,
  placeholder,
  isValid,
  name,
  submit,
  setFormChecked,
  onChange,
  dispatch,
  ...refs
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showBorder, setShowBorder] = useState(isValid);
  const showIcon = isFocused || isValid !== null || submit;
  const phoneRef = useRef<HTMLInputElement>(null);
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

    if (isValid === null) setIsFocused(false);

    setShowBorder(isValid === null && submit ? false : isValid);
  }, [isValid, name, submit, setFormChecked, setShowBorder]);
  const isInputPhone = name.split(',')[1] === "phone";
  return (
    <Container>
      {!isInputPhone ? <TextInput value={value} onChange={onChange} placeholder={placeholder} isValid={isValid}
        name={name} setIsFocused={setIsFocused} setShowBorder={setShowBorder} showBorder={showBorder} {...refs} /> :
        <PhoneInput inputRef={phoneRef} dispatch={dispatch} showBorder={showBorder} value={value} placeholder={placeholder}
          isValid={isValid} setIsFocused={setIsFocused} setShowBorder={setShowBorder} />}
      {showIcon && <Icon $valid={isValid}>{isValid ? <Ok /> : <Error />}</Icon>}
    </Container>
  );
};
