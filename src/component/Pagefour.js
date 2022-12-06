import React from "react";
import { HashLink as Link  } from "react-router-hash-link";
const Pagefour= () => {

  return (
   
    <div className="page-three-main-div" id="pageThreeID">
    <h1>Page Four</h1>
    <Link to="#homePageID" smooth>CLICK ME</Link>
    </div>
    
  );
};

export default Pagefour;