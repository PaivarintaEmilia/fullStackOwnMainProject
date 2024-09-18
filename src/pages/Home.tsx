import React from "react";
import NavContainer from "../components/NavContainer/NavContainer";
//TEst button styling
import ButtonComponent from "../common/Button";
import InputField from "../common/InputField";
import Select from "../common/Select";
// test supabase
import TestData from "../components/testAddingDatatoDb"

const Home: React.FC = () => {

  const handle = () => {
    console.log("Button Clicked")
  };


  return (
    <div>
      <h1>Home Page</h1>
      <NavContainer
        navigateToFirstRoute="/balance"
        navigateToSecondRoute="/contact"
        buttonTextFirst="Go to Balance"
        buttonTextSecond="I don't go anywhere just yet"
      />
      <h2>Lets' test the button styling</h2>
      <ButtonComponent
        name="btnNavContainerFirst"
        type="button"
        value="" // tarvitaanko navContainerissa?
        className=""
        id="global-btn" // tarvitaanko?
        onClick={handle}
        text="This is a test button"
      />
      <h2>Test input</h2>
      <InputField
        name="Name"
        type="text"
        placeholder="testPlaceholder"
        value="value"
        className="inPutFieldClass"
        id="global-input"
        onChange={handle}
      />
      <h2>Test Select</h2>
      <Select
        name="name"
        value="value"
        className="selectClass"
        id="global-select"
        optionText="Helooo"
      />

      <h2>Test adding data</h2>
      <TestData></TestData>
    </div>
  );
};

export default Home;