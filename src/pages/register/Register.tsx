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
            event.preventDefault();
        
            const registerData = {
                username,
                password
            };
    
            console.log("SignInData: ", registerData);
        
            try {
                const response = await fetch('http://127.0.0.1:8000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Oikea kirjoitusasu
                        'Cache-Control': 'no-cache',
                        'Accept': '*/*',
                    },
                    body: JSON.stringify(registerData),
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
    <div className={style.mainContainer}>
      <div className={style.heroContainer}>
        <Hero heroTitle={'Expense Tracker'} titleTag={'Register to the app.'} />
      </div>
      <div className={style.authenticationContainer}>
        <AuthenticationForm 
          title={'Register'} 
          onSubmit={submitForm}
          onChangeUsername={(e) => setUsername(e.target.value)}
          onChangePassword={(e) => setPassword(e.target.value)}
          text='Register'
          valuePassword={password}
          valueUsername={username}
         />
      </div>

      
    </div>
  );
}

export default Register;
