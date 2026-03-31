import type { ChangeEvent, FC } from "react";
import { Input } from "./TextInput.styled";

interface ITextInput extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    isValid: boolean | null;
    name: string;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBorder: React.Dispatch<React.SetStateAction<boolean | null>>;
    showBorder: boolean | null;
}
export const TextInput: FC<ITextInput> = ({ value, isValid, onChange, placeholder, name, setIsFocused, setShowBorder, showBorder }) => {
    return <Input
        $valid={showBorder}
        onBlur={() => {
            setIsFocused(true);
            if (isValid === null) setShowBorder(false);
        }}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
}
