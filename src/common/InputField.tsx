import React from "react";


interface InputFieldProps {
    name: string,
    type: 'text' | 'password' | 'number' | 'hidden', // Mieti jos tähän tulee lisätä tai poistaa jotain
    placeholder: string,
    value: string,
    className: string,
    id: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, // Huomaa e:n tyypitys, koska onChange odottaa parametrejä, kun sitä käytetään
}


const InputField: React.FC<InputFieldProps> = ({ name, type, placeholder, value, className, id, onChange}) => {

    return <input name={name} type={type} placeholder={placeholder} value={value} className={className} id={id} onChange={onChange} />
}

export default InputField;