import React from "react";
import NavContainer from "../components/NavContainer/NavContainer";
//TEst button styling
import ButtonComponent from "../common/Button";

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
    </div>
  );
};

export default Home;