import React from "react";
import Img from "../../common/Img";
import ButtonComponent from "../../common/Button";
import { useNavigate } from 'react-router-dom';
// Styling
import styles from './Header.module.css';




const Header: React.FC = () => {

    const navigate = useNavigate(); // react-router-dom hook navigointiin

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
                source="public\photos\Logo.png"
                alt="LogoIpsum logo for the Project."
                className={styles.logo}
                id="nav-container-img-id" // Mieti tarvitaanko tätä oikeastaan ollenkaan.
            />
            <div className={styles.btnContainer}>
                <ButtonComponent
                    name="register"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.registerBtn}
                    id="global-btn"
                    onClick={navigateLogin}
                    text="Register"
                />
                <ButtonComponent
                    name="Login"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.loginBtn}
                    id="global-btn"
                    onClick={navigateRegister}
                    text="Login"
                />                
                <ButtonComponent
                    name="Logout"
                    type="button"
                    value="" // tarvitaanko navContainerissa?
                    className={styles.logOutBtn}
                    id="global-btn"
                    onClick={navigateLogout}
                    text="Logout"
                />

            </div>

        </div>
    );
}

export default Header;