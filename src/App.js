import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Footer, Form,  Homepage, Pagefour, Pagetwo, Pagethree } from "./component";

const App = () => {
  return (
    <div className="main-app-div">
      <Navbar />

      <div className="homePage" id="Home">
        <Homepage />
      </div>
      <div className="pageTwo" id="Page-two">
        <Pagetwo />
      </div>
      <div className="pageThree" id="Page-three">
        <Pagethree />
      </div>
      <div className="pageFour" id="Page-four">
        <Pagefour />
      </div>
      <div className="contactus" id="contact">
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default App;
