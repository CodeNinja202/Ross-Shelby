import React  from "react";
import { Route, Routes, } from "react-router-dom";

import { Navbar, Products, Footer } from "./component";


const App = () => {
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
