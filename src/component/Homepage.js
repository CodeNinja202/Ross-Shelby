import React from "react";
import { HashLink as Link  } from "react-router-hash-link";
const Homepage = () => {

  return (
   
    <div className="home-main-div" id="homePageID">
    <h1>Home page</h1>
    <Link to="#page-two" smooth>CLICK ME</Link>
    <br></br>
    <Link to="#contact-us-page" smooth>CONTACT ME</Link>
    </div>
    
  );
};

export default Homepage;