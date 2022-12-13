import { useRouter } from "next/router";
import Image from 'next/image';

type FunctionType = (e: any) => void;

interface IInputProps {
    placeholder: string;
    value: string;
    icon?: string;
    disabled?: boolean;
    onChange?: FunctionType;
    type?: string;
}

const Input = ({ placeholder, value, icon = '', onChange, disabled = false, type = 'value' }: IInputProps) => {
    return (
        <div className={`wth-input ${disabled && 'wth-input--disabled'}`}>
            {icon !== '' &&
                <i className={`${icon} wth-input__icon`}></i>
            }
            <input type={type} disabled={disabled} className="wth-input__action" value={value} placeholder={placeholder} onChange={onChange}></input>
        </div>
    );
};

export default Input;