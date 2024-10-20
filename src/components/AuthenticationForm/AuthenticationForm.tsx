import React, { useState } from 'react';
import ButtonComponent from '../../common/Button';
import InputField from '../../common/InputField';
import style from "./AuthenticationForm.module.css";
import { useNavigate } from 'react-router-dom';

interface AuthenticateFormProps {
    title: string,
}

const AuthenticationForm: React.FC<AuthenticateFormProps> = ({
    title,
}) => {

    // Tilamuuttujat, usernamen ja passwordin käyttöön
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // Navigointi
    const navigate = useNavigate();

    // submitform-funktio, kun lähetetään username ja password backendille
    const submitForm = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const signInData = {
            username,
            password
        };

        console.log("SignInData: ", signInData);
    
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Oikea kirjoitusasu
                    'Cache-Control': 'no-cache',
                    'Accept': '*/*',
                },
                body: JSON.stringify(signInData),
            });
    
            if (!response.ok) {
                throw new Error('Back-end -yhteydessä on ongelma.');
            }
    
            navigate('/home'); // Navigoi, jos rekisteröinti onnistuu
    
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
                    id='global-input' // TODO: ei voi olla kahta komponenttia samalla id:llä.
                    onChange={(e) => setPassword(e.target.value)}
                />

                <ButtonComponent
                    name=''
                    type='submit'
                    value=''
                    className=''
                    id='global-btn'
                    text='Login'
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