import type { FC } from "react";
import type { FormAction } from "../../formReducer";
import { StyledIMaskInput } from "./PhoneInput.styled";

interface IPhoneInput {
    dispatch?: React.ActionDispatch<[action: FormAction]>;
    showBorder: boolean | null;
    value: string;
    placeholder: string;
    isValid: boolean | null;
    inputRef: React.Ref<HTMLInputElement>;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
    setShowBorder: React.Dispatch<React.SetStateAction<boolean | null>>
}
export const PhoneInput: FC<IPhoneInput> = ({ dispatch, showBorder, value, placeholder, isValid, inputRef, setIsFocused, setShowBorder }) => {
    return <StyledIMaskInput
        $valid={showBorder}
        mask="+38 (000) 000-00-00"
        unmask={true}
        value={value}
        onBlur={() => {
            setIsFocused(true);
            if (isValid === null) setShowBorder(false);
        }}
        onAccept={(val: string) =>
            dispatch?.({
                type: 'SET_FIELD',
                section: 'contactData',
                field: 'phone',
                value: val,
            })
        }
        placeholder={placeholder}
        inputRef={inputRef}
    />
}