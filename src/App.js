import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, MainPage, Footer } from "./component";

const App = () => {
  return (
    <div className="main-app-div">
      <Navbar />

      <MainPage />

      <Footer />
    </div>
  );
};

export default App;
