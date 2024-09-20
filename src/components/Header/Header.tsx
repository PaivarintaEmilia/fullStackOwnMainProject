import React from "react";
import Img from "../../common/Img";
import ButtonComponent from "../../common/Button";
import { useNavigate, useLocation } from 'react-router-dom';
// Styling
import styles from './Header.module.css';




const Header: React.FC = () => {

    const navigate = useNavigate(); // react-router-dom hook navigointiin
    const location = useLocation(); // Hae nykyinen sijainti

    const navigateLogin = () => {
        navigate('/login'); 
    };    
    
    const navigateRegister = () => {
        navigate('/register'); 
    };    
    
    const navigateLogout = () => {
        navigate('/logout'); 
    };



    return (
        <div className={styles.headerContainer}>
            <Img
                source="/photos/Logo.png"
                alt="LogoIpsum logo for the Project."
                className={styles.logo}
                id="nav-container-img-id" // Mieti tarvitaanko tätä oikeastaan ollenkaan.
            />
            <div className={styles.btnContainer}>
                {location.pathname !== '/register' &&
                <ButtonComponent
                    name="register"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.registerBtn}
                    id="global-btn"
                    onClick={navigateLogin}
                    text="Register"
                /> 
                }
                <ButtonComponent
                    name="Login"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.loginBtn}
                    id=""
                    onClick={navigateRegister}
                    text="Login"
                />                
                <ButtonComponent
                    name="Logout"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.logOutBtn}
                    id="logOutHidden"
                    onClick={navigateLogout}
                    text="Logout"
                />

            </div>

        </div>
    );
}

export default Header;