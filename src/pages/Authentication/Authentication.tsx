import React, { useState } from 'react';
import style from "./Authentication.module.css"
import Hero from '../../components/Hero/Hero';
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {

        // Tilamuuttujat, usernamen ja passwordin käyttöön
        const [username, setUsername] = useState<string>('');
        const [password, setPassword] = useState<string>('');
    
        // Navigointi
        const navigate = useNavigate();
    
        // submitform-funktio, kun lähetetään username ja password backendille
        const submitForm = async (event: React.FormEvent) => {
            // Estetään sivun automaattinen päivitys, mikä tapahtuu normaalisti form-elementin kanssa
            event.preventDefault();
        
            const signInData = {
                username,
                password
            };
    
            console.log("SignInData: ", signInData);
        
            try {
                const response = await fetch('http://127.0.0.1:5000/users/postgres', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Oikea kirjoitusasu
                        //'Cache-Control': 'no-cache',
                        //'Accept': '*/*',
                    },
                    body: JSON.stringify(signInData),
                });
        
                if (!response.ok) {
                    throw new Error('Back-end -yhteydessä on ongelma.');
                }

                // Odotetaan vastaukseksi tokenia
                const { token } = await response.json();

                console.log("Token: ", token)

                // Tallennetaan token local storageen
                localStorage.setItem('jwt', token);
        
                navigate('/home'); // Navigoi, jos rekisteröinti onnistuu
        
            } catch (error) {
                console.error("Virhe /register-routen post-requestissa:", error);
            }
        };

  return (
    <div className={style.mainContainer}>
      <div className={style.heroContainer}>
        <Hero heroTitle={'Expense Tracker'} titleTag={'Sign in to the app.'} />
      </div>
      <div className={style.authenticationContainer}>
        <AuthenticationForm 
          title={'Login'} 
          onSubmit={submitForm}
          onChangeUsername={(e) => setUsername(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
          text='Login'
          valuePassword={password}
          valueUsername={username}
         />
      </div>

      
    </div>
  );
}

export default Register;
