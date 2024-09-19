import React from "react";


interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    id: string;
}


const Select: React.FC<SelectProps> = ({ options, onChange, placeholder, id }) => {

    return (
        <select onChange={onChange} defaultValue="" id={id}>
            <option value="" disabled selected>{placeholder}</option>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;