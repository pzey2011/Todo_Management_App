
import React from 'react';

interface Props {
    setValue: (string) => void;
    value: string;
    placeholder: string;
}

const InputField = ({ value, setValue, placeholder }: Props) => {
    return (
        <input
            type='input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder} 
        >        
            
        </input>
    );
};

export default InputField;