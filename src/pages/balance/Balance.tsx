import React from "react";
import { useNavigate } from 'react-router-dom';
import Hero from "../../components/Hero/Hero";
import AddForms from "../../components/AddEditForm/AddForms";
import NavContainer from "../../components/NavContainer/NavContainer";
import DataCard from "../../components/DataCards/DataCard";
import styles from "./Balance.module.css";




interface NavContainerProps {
  navigateToRoute: string;  // Reitti ensimmäiselle painikkeelle
}



const Balance: React.FC<NavContainerProps> = ({
  navigateToRoute
}) => {

  const navigate = useNavigate(); // react-router-dom hook navigointiin

  const handleBtnClick = () => {
    navigate(navigateToRoute); // Navigoi takaisin kotiin
  };

  return (
    <div>
      <Hero heroTitle={"See your monthly income and expenses."} titleTag={"Choose a time period and see the income a budget between given time."} />
      {/* TODO: Lisätään sort-toiminnallisuus myöhemmin, missä käyttäjä voi valikoida data valitun kuukauden ja vuoden perusteella. */}
      <h2>Expenses</h2>
      <DataCard title={"Food Total"} totalAmount={200} />
      <h2>Income</h2>
      <DataCard title={"Salary"} totalAmount={1500} />
      <AddForms />
      <NavContainer navigateToFirstRoute={"/"} navigateToSecondRoute={"/balance"} buttonTextFirst={"Back to Home"} buttonTextSecond={"Log Out"} />

    </div>
  );
};

export default Balance;