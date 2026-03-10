import { type FC, type ChangeEvent, useState } from 'react';
import { Container, Icon, Input } from './ValidatedInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';

interface ValidatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isValid: boolean | null;
  name: string;
  submit: boolean;
}

export const ValidatedInput: FC<ValidatedInputProps> = ({
  value,
  onChange,
  placeholder,
  isValid,
  id,
  name,
  submit,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const showIcon = isFocused || isValid !== null || submit;

  return (
    <Container>
      <Input
        onBlur={() => setIsFocused(true)}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest} // передаємо всі стандартні пропси input
      />

      {showIcon && <Icon $valid={isValid}>{isValid ? <Ok /> : <Error />}</Icon>}
    </Container>
  );
};
