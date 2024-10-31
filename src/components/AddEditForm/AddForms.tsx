import React, { useState } from "react";
import AddEditForm from "./AddEditForm";
import styles from "./AddEditForm.module.css";



const AddForms: React.FC = () => {

    // Tilamuuttujat Income-lomakkeelle tietojen lähetykseen back-endille
    const [incomeNote, setIncomeNote] = useState<string>("")
    const [incomeAmount, setIncomeAmount] = useState<number>()

    // Tilamuuttujat Expense-lomakkeelle tietojen lähetykseen back-endille
    const [expenseNote, setExpenseNote] = useState<string>("")
    const [expenseAmount, setExpenseAmount] = useState<number>()
    const [selectCategory, setSelectCategory] = useState<number>()


    // Haetaan käyttäjän id localStoragesta
    const userId = localStorage.getItem("user_id");

    // Funktio incomeNote-muuttujan päivittämiseen
    const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIncomeNote(e.target.value);
    };

    // Funktio incomeAmount-muuttujan päivittämiseen
    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Muutetaan syötä numeeriseen muotoon
        const value = parseFloat(e.target.value);
        // Asetetaan undefined, jos syöte ei olekaan numeerisessa muodossa
        setIncomeAmount(isNaN(value) ? undefined : value);
    };

    // Funktio expenseNote-muuttujan päivittämiseen
    const handleExpenseNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpenseNote(e.target.value);
    };

    // Funktio expenseAmount-muuttujan päivittämiseen
    const handleExpenseAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Muutetaan syötä numeeriseen muotoon
        const value = parseFloat(e.target.value);
        // Asetetaan undefined, jos syöte ei olekaan numeerisessa muodossa
        setExpenseAmount(isNaN(value) ? undefined : value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value); // Muutetaan valittu arvo numeroksi
        setSelectCategory(isNaN(value) ? undefined : value); // Asetetaan undefined, jos valinta ei ole luku
    };
    


    

    // Funktio datan lähettämiseen back-endille Expense-firmin kautta
    const submitFormExpense = async (e: React.FormEvent) => {

        // Ei sittenkään estetä sivun päivittämistä, sillä yläosan tiedot tulee päivittää
        //e.preventDefault();

        // Kasataan lähetettävä data 
        if (userId) {
            const sentData = {
                user_id: userId,
                category_id: selectCategory,
                expense_amount: expenseAmount,
                note: expenseNote,
            };

            try {
                const responseIncome = await fetch("http://127.0.0.1:5000/expense/postgres", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sentData),
                });

                if (!responseIncome.ok) {
                    throw new Error("Expenseä ei pystytty lisäämään.");
                }

                // Tyhjennetään kentät lomakkeen lähettämisen jälkeen
                setExpenseNote("");
                setExpenseAmount(undefined); // Resetoi amount kenttä
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    }

    // Funktio datan lähettämiseen back-endille Income-formin kautta
    const submitFormIncome = async (e: React.FormEvent) => {

        // Ei sittenkään estetä sivun päivittämistä, sillä yläosan tiedot tulee päivittää
        //e.preventDefault();

        // Kasataan lähetettävä data 
        if (userId) {
            const sentData = {
                user_id: userId,
                income_amount: incomeAmount,
                note: incomeNote,
            };

            try {
                const responseIncome = await fetch("http://127.0.0.1:5000/income/postgres", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(sentData),
                });

                if (!responseIncome.ok) {
                    throw new Error("Incomea ei pystytty lisäämään.");
                }

                // Tyhjennetään kentät lomakkeen lähettämisen jälkeen
                setIncomeNote("");
                setIncomeAmount(undefined); // Resetoi amount kenttä
            } catch (error) {
                console.error("Error: ", error);
            }
        }
    }



    return (
        <div className={styles.formBackground}>
            <div className={styles.formContainer}>
                <AddEditForm 
                    formTitle={"Expenses"} 
                    noteName={"note"} 
                    noteValue={expenseNote} 
                    amountName={"amount"} 
                    amountValue={expenseAmount !== undefined ? expenseAmount.toString() : ""} 
                    buttonText={"Add Expenses"} 
                    noteChange={handleExpenseNoteChange} 
                    amountChange={handleExpenseAmountChange}
                    selectChange={handleSelectChange} // Selecting change
                    onButtonClick={function (): void {
                    throw new Error("Function not implemented.");
                    }} 
                    onSubmit={submitFormExpense}
                />
                <AddEditForm 
                    formTitle={"Income"} 
                    noteName={"note"} 
                    noteValue={incomeNote} 
                    amountName={"income_amount"} 
                    amountValue={incomeAmount !== undefined ? incomeAmount.toString() : ""} // Muutetaan takaisin string-muoton. Jos ei ole undefined tämä on määritetty arvo 
                    buttonText={"Add Income"} 
                    noteChange={handleNoteChange} 
                    amountChange={handleAmountChange} 
                    selectChange={() => {}} // Selectin change 
                    onButtonClick={function (): void {
                    throw new Error("Function not implemented."); // Tarvitaanko tätä??
                    }} 
                    onSubmit={submitFormIncome}
                />


            </div>

        </div>

    );
}

export default AddForms;


