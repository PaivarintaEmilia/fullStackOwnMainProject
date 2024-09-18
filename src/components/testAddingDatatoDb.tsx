import React from "react";
//import { supabase } from "../../supabase";
import supabase from "../../supabase"
import ButtonComponent from "../common/Button";

const TestData: React.FC = () => {


    //const [nickname, setNicname] = useState("");

    const addUserData = async () => {

        // lisätään tietokantaan nimimerkki
        const { data, error } = await supabase
          .from('income')
          .insert([
            {
              user_id: 1,
              income_amount: 20,
              income_date: '2024-09-18'
            }
          ]).select()
        
        console.log('data', data, 'error', error);

    }

  return ( <>
  
    <h2>Add income test</h2>
    <ButtonComponent name={""} type={"button"} value={""} className={""} id={"global-btn"} text={"Add data test"} onClick={addUserData }></ButtonComponent>
  </>


   
  );
};

export default TestData;