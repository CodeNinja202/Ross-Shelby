import React from "react";

import { HashLink as Link  } from "react-router-hash-link";



const Navbar = () => {
 return (
  <nav className="main-nav">
    <h1>LOGO</h1>
     <Link to="#homePageID" smooth>HOME</Link>
     <Link to="#page-two" smooth>PAGE TWO</Link>
     <Link to="#pageThreeID" smooth>PAGE THREE</Link>
     <Link to="#pageFourID" smooth>PAGE FOUR</Link>
     <Link to="#contactUS" smooth>CONTACT</Link>
     </nav>
  );
}

export default Navbar;