import React from "react";


interface SelectProps {
    name: string,
    value: string,
    className: string,
    id: string,
    optionText: string,
}


const Select: React.FC<SelectProps> = ({ name, value, className, id, optionText }) => {

    return (
        <select name={name} id={id} className={className}>
            <option value={value}>{optionText}</option>
        </select>
    );
}

export default Select;