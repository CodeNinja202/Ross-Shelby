import React  from "react";
import { Route, Routes, } from "react-router-dom";

import { Navbar, Products, Footer, Form } from "./component";


const App = () => {
  console.log("Hello")
  return (
    <div className="main-div">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
