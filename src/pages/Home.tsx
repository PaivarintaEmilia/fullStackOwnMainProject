import React from "react";
import NavContainer from "../components/NavContainer/NavContainer";


const Home: React.FC = () => {
    return (
      <div>
        <h1>Home Page</h1>
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