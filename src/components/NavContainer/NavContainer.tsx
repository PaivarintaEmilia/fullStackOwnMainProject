import React from "react";
import Img from "../../common/Img";
import ButtonComponent from "../../common/Button";
import { useNavigate } from 'react-router-dom';


interface NavContainerProps {
    navigateToFirstRoute: string;  // Reitti ensimmäiselle painikkeelle
    navigateToSecondRoute: string; // Reitti toiselle painikkeelle
    buttonTextFirst: string;  // Teksti ensimmäiselle painikkeelle
    buttonTextSecond: string; // Teksti toiselle painikkeelle
}


const NavContainer: React.FC<NavContainerProps> = ({
    navigateToFirstRoute,
    navigateToSecondRoute,
    buttonTextFirst,
    buttonTextSecond,
}) => {

    const navigate = useNavigate(); // react-router-dom hook navigointiin

    const handleFirstButtonClick = () => {
        navigate(navigateToFirstRoute); // Navigoi ensimmäiselle reitille
    };

    const handleSecondButtonClick = () => {
        navigate(navigateToSecondRoute); // Navigoi toiselle reitille
    };

    return (
        <div className="nav-container">
            <Img
                source="../../assests/photos/ballImg.png"
                alt="Light purple abstract image that consist of several different sized round objects."
                className="nav-container-img"
                id="nav-container-img-id" // Mieti tarvitaanko tätä oikeastaan ollenkaan.
            />
            <ButtonComponent
                name="btnNavContainerFirst"
                type="button"
                value="" // tarvitaanko navContainerissa?
                className="nav-container-btn"
                id="nav-container-btn-first-id" // tarvitaanko?
                onClick={ handleFirstButtonClick }
                text={buttonTextFirst}
            />
            <ButtonComponent
                name="btnNavContainerSecond"
                type="button"
                value="" // tarvitaanko navContainerissa?
                className="nav-container-btn"
                id="nav-container-btn-second-id" // tarvitaanko?
                onClick={ handleSecondButtonClick }
                text={buttonTextSecond}
            />
        </div>
    );
}

export default NavContainer;