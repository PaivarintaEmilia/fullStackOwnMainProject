import React from 'react';
import ButtonComponent from '../../common/Button';
import InputField from '../../common/InputField';
import style from "./AuthenticationForm.module.css";


interface AuthenticateFormProps {
    title: string,
    passwordPlaceholder: string;
    submitForm: () => void,
}

const AuthenticationForm: React.FC<AuthenticateFormProps> = ({
    title,
    passwordPlaceholder,
    submitForm
}) => {
    return (
        <div className={style.authenticationFormContainer}>
            <form onSubmit={submitForm}>
                <h2>{title}</h2>
                <InputField
                    name={''}
                    type={'text'}
                    placeholder={''}
                    value={''}
                    className={''}
                    id={'global-input'}
                    onChange={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                />
                <InputField
                    name={''}
                    type={'password'}
                    placeholder={passwordPlaceholder}
                    value={''}
                    className={''}
                    id={'global-input'}
                    onChange={function (): void {
                        throw new Error('Function not implemented.');
                    }}
                />

                <ButtonComponent
                    name={''}
                    type={'submit'}
                    value={''}
                    className={''}
                    id={'global-btn'}
                    text={'Login'}
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                <ButtonComponent
                    name={''}
                    type={'button'}
                    value={''}
                    className={style.googleBtn}
                    id={''}
                    text={'Google Auth.'}
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />

            </form>

        </div>
    );
}

export default AuthenticationForm;