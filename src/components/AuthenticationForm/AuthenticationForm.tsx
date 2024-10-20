import React, { useState } from 'react';
import ButtonComponent from '../../common/Button';
import InputField from '../../common/InputField';
import style from "./AuthenticationForm.module.css";

interface AuthenticateFormProps {
    title: string,
    onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
    valueUsername: string,
    valuePassword: string,
    text: string
}

const AuthenticationForm: React.FC<AuthenticateFormProps> = ({
    title,
    onSubmit,
    onChangeUsername,
    onChangePassword,
    valueUsername,
    valuePassword,
    text,
}) => {


    

    return (
        <div className={style.authenticationFormContainer}>
            <form onSubmit={onSubmit}>
                <h2>{title}</h2>
                <InputField
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    value={valueUsername}
                    className=''
                    id='global-input'
                    onChange={onChangeUsername}
                />
                <InputField
                    name='password'
                    type='password'
                    placeholder='Create password'
                    value={valuePassword}
                    className=''
                    id='global-input' // TODO: ei voi olla kahta komponenttia samalla id:llä.
                    onChange={onChangePassword}
                />

                <ButtonComponent
                    name=''
                    type='submit'
                    value=''
                    className=''
                    id='global-btn'
                    text={text}
                    onClick={() => console.log("Todo määritä tämä myöhemmin tai muokkaa niin ettei tarvita.")} />
                <ButtonComponent
                    name=''
                    type='button'
                    value=''
                    className={style.googleBtn}
                    id=''
                    text='Google Auth.'
                    onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />

            </form>

        </div>
    );
}

export default AuthenticationForm;