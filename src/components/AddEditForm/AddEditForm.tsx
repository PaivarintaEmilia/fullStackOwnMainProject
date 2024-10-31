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
    noteChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    amountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onButtonClick: () => void;
    onSubmit: (e: React.FormEvent) => Promise<void>;
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
    onSubmit,
}) => {

    /* Select komponentin toiminnot, koska nämä pysyvät samana lomakkeelta toiselle*/
    const [selectedOption, setSelectedOption] = useState('');


    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        console.log("Selected option: " + selectedOption);
    };

    const options = [
        { category_id: 1, category_name: 'Category 1' },
        { category_id: 2, category_name: 'Category 2' },
        { category_id: 3, category_name: 'Category 3' },
    ];



    return (
        <div>

            <div >

                <form onSubmit={onSubmit}>
                    <h3>{formTitle}</h3>
                    <InputField
                        name={noteName}
                        type={"text"}
                        placeholder={"Note"}
                        value={noteValue}
                        className={""}
                        id={"global-input"}
                        onChange={noteChange}
                    />
                    {/* TODO: Select tulee piilottaa tietyissä tapauksissa. Määrittele tämä myöhemmin. TOIMII */}
                    {formTitle !== "Income" &&
                        <Select
                            options={options}
                            onChange={handleSelect}
                            placeholder={"Choose Expense Category"}
                            id="global-select"
                        />
                    }

                    <InputField
                        name={amountName}
                        type={"number"}
                        placeholder={"Amount"}
                        value={amountValue}
                        className={""}
                        id={"global-input"}
                        onChange={amountChange}
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

