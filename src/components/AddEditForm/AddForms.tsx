import React from "react";
import AddEditForm from "./AddEditForm";
import styles from "./AddEditForm.module.css";

interface AddFormsProps {

}



const AddForms: React.FC<AddFormsProps> = ({
    /* props here if there is any */
}) => {
    return (
        <div className={styles.formBackground}>
            <div className={styles.formContainer}>
                <AddEditForm formTitle={"Expenses"} noteName={""} noteValue={""} amountName={""} amountValue={""} buttonText={"Add Expenses"} noteChange={function (): void {
                    throw new Error("Function not implemented.");
                }} amountChange={function (): void {
                    throw new Error("Function not implemented.");
                }} onButtonClick={function (): void {
                    throw new Error("Function not implemented.");
                }} submitForm={function (): void {
                    throw new Error("Function not implemented.");
                }}
                />
                <AddEditForm formTitle={"Income"} noteName={""} noteValue={""} amountName={""} amountValue={""} buttonText={"Add Income"} noteChange={function (): void {
                    throw new Error("Function not implemented.");
                }} amountChange={function (): void {
                    throw new Error("Function not implemented.");
                }} onButtonClick={function (): void {
                    throw new Error("Function not implemented.");
                }} submitForm={function (): void {
                    throw new Error("Function not implemented.");
                }}
                />


            </div>

        </div>

    );
}

export default AddForms;

