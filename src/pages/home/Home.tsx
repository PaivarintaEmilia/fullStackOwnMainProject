import React from "react";
import NavContainer from "../../components/NavContainer/NavContainer";
import Hero from "../../components/Hero/Hero";
import TotalCards from "../../components/TotalCards/TotalCards";
import AddForms from "../../components/AddEditForm/AddForms";
// Styling
import styles from "./Home.module.css";

const Home: React.FC = () => {



  return (
    <div>
      <Hero heroTitle={"Expense Tracker"} titleTag={"Welcome to track your income and expenses to better your budgeting."}></Hero>
      {/* Mieti vielä totalCardien tulostusta */}
      <div className={styles.totalCardsContainer}>
        <TotalCards totalCardTitle={"Income"} totalCardAmount={1200} />
        <TotalCards totalCardTitle={"Total"} totalCardAmount={30} />
        <TotalCards totalCardTitle={"Expenses"} totalCardAmount={200} />
      </div>
      {/* Add forms home screenillä */}
      <div className={styles.addFormContainer}>
        <AddForms />
      </div>


      <NavContainer
        navigateToFirstRoute="/balance"
        navigateToSecondRoute="/contact"
        buttonTextFirst="Go to Balance"
        buttonTextSecond="I don't go anywhere just yet"
      />

    </div>
  );
};

export default Home;