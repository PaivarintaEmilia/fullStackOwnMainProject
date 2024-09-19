import React, { useState } from "react";
import ButtonComponent from "../../common/Button";
import InputField from "../../common/InputField";
import Select from "../../common/Select";

interface AddEditFormProps {
    formTitle: string;
    noteName: string;
    noteValue: string;
    amountName: string;
    amountValue: string;
    buttonText: string;
    noteChange: () => void;
    amountChange: () => void;
    onButtonClick: () => void;
    submitForm: () => void;
}

const AddEditForm: React.FC<AddEditFormProps> = ({
    formTitle,
    noteName,
    noteValue,
    amountName,
    amountValue,
    buttonText,
    noteChange,
    amountChange,
    onButtonClick,
    submitForm,
}) => {

    /* Select komponentin toiminnot, koska nämä pysyvät samana lomakkeelta toiselle*/
    const [selectedOption, setSelectedOption] = useState('');


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        console.log("Selected option: " + selectedOption);
    };

    const options = [
        { value: 'option1', label: 'Category 1' },
        { value: 'option2', label: 'Category 1' },
        { value: 'option3', label: 'Category 1' },
    ];



    return (
        <div>

            <div >

                <form onSubmit={submitForm}>
                    <h3>{formTitle}</h3>
                    <InputField
                        name={noteName}
                        type={"text"}
                        placeholder={"Note"}
                        value={noteValue}
                        className={""}
                        id={"global-input"}
                        onChange={() => { noteChange }}
                    />
                    {/* TODO: Select tulee piilottaa tietyissä tapauksissa. Määrittele tämä myöhemmin. */}
                    <Select
                        options={options}
                        onChange={handleSelect}
                        placeholder={"Choose Expense Category"}
                        id="global-select"
                    />
                    <InputField
                        name={amountName}
                        type={"number"}
                        placeholder={"Amount"}
                        value={amountValue}
                        className={""}
                        id={"global-input"}
                        onChange={() => { amountChange }}
                    />
                    <ButtonComponent
                        name={""}
                        type={"submit"}
                        value={""}
                        className={""}
                        id={"global-btn"}
                        text={buttonText}
                        onClick={onButtonClick}
                    />


                </form>

            </div>


        </div>
    );
}

export default AddEditForm;

