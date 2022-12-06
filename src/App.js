import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, MainPage, Footer } from "./component";

const App = () => {
  return (
    <div className="home" >
      <header className="main-app-header" id="home">
        <Navbar />
      </header>

      <main className="main-app-main">
        <MainPage />
      </main>

      <footer className="main-app-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
