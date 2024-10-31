import React, { useState } from "react";
import AddEditForm from "./AddEditForm";
import styles from "./AddEditForm.module.css";

interface AddFormsProps {

}



const AddForms: React.FC<AddFormsProps> = ({
    /* props here if there is any */
}) => {

    // Tilamuuttujat Income-lomakkeelle tietojen lähetykseen back-endille
    const [incomeNote, setIncomeNote] = useState<string>("")
    const [incomeAmount, setIncomeAmount] = useState<number>()

    // Haetaan käyttäjän id localStoragesta
    const userId = localStorage.getItem("user_id");

    // Funktio note-muuttujan päivittämiseen
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

    // Funktio datan lähettämiseen back-endille Income-formin kautta
    const submitFormIncome = async (e: React.FormEvent) => {

        // Estetään sivun päivittäminen
        e.preventDefault();

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
                    noteName={""} 
                    noteValue={""} 
                    amountName={""} 
                    amountValue={""} 
                    buttonText={"Add Expenses"} 
                    noteChange={function (): void {
                    throw new Error("Function not implemented.");
                    }} 
                    amountChange={function (): void {
                    throw new Error("Function not implemented.");
                    }} 
                    onButtonClick={function (): void {
                    throw new Error("Function not implemented.");
                    }} 
                    onSubmit={async () => {}}
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


