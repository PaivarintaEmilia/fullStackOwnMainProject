import React from "react";
import { useNavigate } from 'react-router-dom';
import ButtonComponent from "../common/Button";

interface NavContainerProps {
  navigateToRoute: string;  // Reitti ensimmäiselle painikkeelle
}

const Balance: React.FC<NavContainerProps> = ({ navigateToRoute }) => {
  const navigate = useNavigate(); // react-router-dom hook navigointiin

  const handleBtnClick = () => {
    navigate(navigateToRoute); // Navigoi takaisin kotiin
  };

  return (
    <div>
      <h1>Hello and welcome to Balance Page!</h1>
      <ButtonComponent
        name="balanceButton"
        type="button"
        value=""
        className="btn"
        id="btn-id"
        onClick={handleBtnClick}
        text="Navigate back to home"
      />
    </div>
  );
};

export default Balance;