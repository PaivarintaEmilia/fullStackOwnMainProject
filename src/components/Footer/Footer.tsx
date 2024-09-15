import React from "react";
import Img from "../../common/Img";
// import ButtonComponent from "../../common/Button";
// import { useNavigate, useLocation } from 'react-router-dom';
// Styling
import styles from "./Footer.module.css"




const Footer: React.FC = () => {

    // const navigate = useNavigate(); // react-router-dom hook navigointiin

    
/*     const navigateLogout = () => {
        navigate('/logout'); 
    }; */



    return (
        <div className={styles.FooterContainer}>
            <Img
                source="public\photos\Logo.png"
                alt="LogoIpsum logo for the Project."
                className={styles.logoFooter}
                id="nav-container-img-id" // Mieti tarvitaanko tätä oikeastaan ollenkaan.
            />
            <div className={styles.navigationContainer}>
                <div className={styles.linkContainer}>
                    <h4>Contact</h4>
                    <a href="#">esim@gmail.com</a>
                </div>                
                <div className={styles.linkContainer}>
                    <h4>Socials</h4>
                    <a href="#">gitHub</a>
                    <a href="#">LinkedIn</a>
                </div>                
                <div className={styles.linkContainer}>
                    <h4>Linklist</h4>
                    <a href="/">Home</a>
                    <a href="/balance">Balance</a>
                    <a href="/logout">LogOut</a>
                    <a href="#">Documentation</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;