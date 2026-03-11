import { type FC, type ChangeEvent, useState, useEffect } from 'react';
import { Container, Icon, Input } from './ValidatedInput.styled';
import { Error, Ok } from '../../Generic/Icons/ValidateIcons';

interface ValidatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isValid: boolean | null;
  name: string;
  submit: boolean;
  setFormChecked: Function;
}

export const ValidatedInput: FC<ValidatedInputProps> = ({
  value,
  onChange,
  placeholder,
  isValid,
  name,
  submit,
  setFormChecked,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const showIcon = isFocused || isValid !== null || submit;
  useEffect(() => {
    const splitedName = name.split(',');
    if (splitedName.length === 1) {
      setFormChecked((prev: any) => {
        return { ...prev, [splitedName[0]]: isValid };
      });
    } else {
      setFormChecked((prev: any) => {
        return {
          ...prev,
          [splitedName[0]]: {
            ...prev[splitedName[0]],
            [splitedName[1]]: isValid,
          },
        };
      });
    }
  }, [isValid]);

  return (
    <Container>
      <Input
        onBlur={() => setIsFocused(true)}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />

      {showIcon && <Icon $valid={isValid}>{isValid ? <Ok /> : <Error />}</Icon>}
    </Container>
  );
};
