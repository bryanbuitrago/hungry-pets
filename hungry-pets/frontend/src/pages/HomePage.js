import React from "react";
import PetList from "../components/PetList";
import LoginSignup from "../components/LoginSignup";

const HomePage = () => {
  return (
    <div>
      <LoginSignup />
      <PetList />
    </div>
  );
};

export default HomePage;
