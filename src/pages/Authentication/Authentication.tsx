import React from 'react';
import style from "./Authentication.module.css"
import Hero from '../../components/Hero/Hero';
import AuthenticationForm from '../../components/AuthenticationForm/AuthenticationForm';

const Authentication: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.heroContainer}>
        <Hero heroTitle={'Expense Tracker'} titleTag={'SignIn or create a new user from Register-route.'} />
      </div>
      <div className={style.authenticationContainer}>
        <AuthenticationForm 
          title={'Login'} 
          passwordPlaceholder={'password'} 
          submitForm={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>

      
    </div>
  );
}

export default Authentication;
