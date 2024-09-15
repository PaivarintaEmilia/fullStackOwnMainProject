import React from "react";


interface InputFieldProps {
    name: string,
    type: 'text' | 'password' | 'number' | 'hidden', // Mieti jos tähän tulee lisätä tai poistaa jotain
    placeholder: string,
    value: string,
    className: string,
    id: string,
    onChange: () => void,
}


const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder, value, className, id, onChange}) => {

    return <input name={name} type={type} placeholder={placeholder} value={value} className={className} id={id} onClick={onChange} />
}

export default InputField;