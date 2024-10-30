import React, { useState, useEffect } from "react";
import NavContainer from "../../components/NavContainer/NavContainer";
import Hero from "../../components/Hero/Hero";
import TotalCards from "../../components/TotalCards/TotalCards";
import AddForms from "../../components/AddEditForm/AddForms";
// Styling
import styles from "./Home.module.css";

const Home: React.FC = () => {
  // Tilamuuttujat TotalCard-komponenteille
  const [incomeTotal, setIncomeTotal] = useState<number>(0);
  const [expenseTotal, setExpenseTotal] = useState<number>(0); // Korjattu muuttujan nimi

  useEffect(() => {
    // Tämä koodi suoritetaan, kun komponentti ladataan

    // Back-endille tulee lähettää id
    const userId = localStorage.getItem('user_id');

    const fetchIncomeData = async () => {
      try {
        const incomeResponse = await fetch(`http://127.0.0.1:5000/income/postgres/${userId}`, { // Korjattu template literal
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', // Oikea kirjoitusasu
          },
        });

        if (!incomeResponse.ok) {
          throw new Error('Back-end -yhteydessä on ongelma.');
        }

        const incomeData = await incomeResponse.json();
        setIncomeTotal(incomeData.total_income); 

        console.log("IncomeData: ", incomeData);
      } catch (error) {
        console.error("Virhe tiedon haussa:", error);
      }
    };

    fetchIncomeData(); // Kutsu asynkronista funktiota

    // Haetaan expense data
    const fetchExpenseData = async () => {
      try {
        const expenseResponse = await fetch(`http://127.0.0.1:5000/expense/postgres/${userId}`, { // Korjattu template literal
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', // Oikea kirjoitusasu
          },
        });

        if (!expenseResponse.ok) {
          throw new Error('Back-end -yhteydessä on ongelma.');
        }

        const expenseData = await expenseResponse.json();
        setExpenseTotal(expenseData.total_expense); 

        console.log("ExpenseData: ", expenseData);
      } catch (error) {
        console.error("Virhe tiedon haussa:", error);
      }
    };

    fetchExpenseData(); // Kutsu asynkronista funktiota

  }, []); // Tyhjät riippuvuudet varmistavat, että tämä suoritetaan vain kerran

  return (
    <div>
      <Hero 
        heroTitle={"Expense Tracker"} 
        titleTag={"Welcome to track your income and expenses to better your budgeting."} 
      />
      {/* Mieti vielä totalCardien tulostusta */}
      <div className={styles.totalCardsContainer}>
        <TotalCards totalCardTitle={"Income"} totalCardAmount={incomeTotal} />
        <TotalCards totalCardTitle={"Total"} totalCardAmount={parseFloat((incomeTotal - expenseTotal).toFixed(2))} />
        <TotalCards totalCardTitle={"Expenses"} totalCardAmount={expenseTotal} />
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
