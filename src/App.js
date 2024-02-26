import React from "react";
import Navbar from "./Components/Navbar"; 
import "./App.css"
import AboutUsPage from "./Components/AboutUs";
function App() {
  return (
    <div>
      <Navbar />
      <h1 className="first-heading">
        WELCOME TO NIMBUS
      </h1>
      <AboutUsPage />
    </div>
  );
}

export default App;
