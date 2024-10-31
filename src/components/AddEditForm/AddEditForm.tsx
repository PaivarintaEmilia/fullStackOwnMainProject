import React, { useEffect, useState } from "react";
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
    selectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
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
    selectChange,
    onButtonClick,
    onSubmit,
}) => {

    /* Select komponentin toiminnot, koska nämä pysyvät samana lomakkeelta toiselle*/

    // Options tilan alustaminen
    const [options, setOptions] = useState<{ category_id: number; category_name: string }[]>([]); 


    // Luodaan useEffect, joka ajetaan kerran sivuston latautuessa. 
    // Tällä haetaan tarvittavat tiedot select-komponentin Category-listausta varten
    useEffect(() => {

        // Haetaan categories back-endin puolelta
        const fetchCategories = async () => {

            // Haetaan user_id localStoragesta
            const userId = localStorage.getItem('user_id');

            // Otetaan yhteys back-endiin
            if (userId) {
                try {

                    const response = await fetch(`http://127.0.0.1:5000/expensecategory/postgres/${userId}`, { 
                        method: 'GET',
                        headers: {
                          'Content-Type': 'application/json', 
                        },
                    });

                    if (!response.ok) {
                        throw new Error("Categories fetching failed.");
                    }

                    // Otetaan back-endin vastaus talteen
                    const data = await response.json();

                    // Muutetaan data oikeaan muotoon
                    setOptions(data["Category_listing"].map((category: {categoryId: number; categoryName: string }) => ({
                        category_id: category.categoryId,
                        category_name: category.categoryName
                    })));

                } catch (error) {
                    console.error("Error connecting to database and fetching categories: ", error);
                }
            }
        };

        fetchCategories();
    }, []);









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
                            onChange={selectChange}
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

