import React from "react";
import { HashLink as Link  } from "react-router-hash-link";
const Pagetwo = () => {

  return (
   
    <div  id="page-two">
    <h1>Page two</h1>
    <Link to="#main-navBar">CLICK ME NOW</Link>
    </div>
    
  );
};

export default Pagetwo;