import React, { useState } from 'react';
import ButtonComponent from '../../common/Button';
import InputField from '../../common/InputField';
import style from "./AuthenticationForm.module.css";
import { useNavigate } from 'react-router-dom';

interface AuthenticateFormProps {
    title: string,
    onClick: () => void,
}

const AuthenticationForm: React.FC<AuthenticateFormProps> = ({
    title,
    onClick,
}) => {

    // Tilamuuttujat, usernamen ja passwordin käyttöön
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Navigointi
    const navigate = useNavigate();

    // submitform-funktio, kun lähetetään username ja password backendille
    const submitForm = async (event: React.FormEvent) => {
        // Estä sivun uudelleenlataus, mikä on formien normaalitoiminta
        event.preventDefault();

        // Luodaan JSON-muotoinen data
        const signInData = {
            username,
            password
        }

        try {
            // Post-request /register-routeen. Lisätään tiedot tietokantaan
            const response = await fetch('https://backendexpensetracker.mariaemilia-paivarinta.workers.dev/register', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify(signInData),
            });

            if (!response.ok) {
                throw new Error('Back-end -yhteydessä on ongelma.');
            }

            // jos rekisteröinti on ok niin navigoidaan /home-pagelle
            navigate('/home');

        } catch (error) {
            console.error("Virhe /register-routen post-requestissa:", error);
        }


    };

    return (
        <div className={style.authenticationFormContainer}>
            <form onSubmit={submitForm}>
                <h2>{title}</h2>
                <InputField
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    value={username}
                    className=''
                    id='global-input'
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    name='password'
                    type='password'
                    placeholder='Create password'
                    value={password}
                    className=''
                    id='global-input'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ButtonComponent
                    name=''
                    type='submit'
                    value=''
                    className=''
                    id='global-btn'
                    text='Login'
                    onClick={onClick} />
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