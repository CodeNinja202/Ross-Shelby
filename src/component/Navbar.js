import React from "react";

import { HashLink as Link  } from "react-router-hash-link";



const Navbar = () => {
 return (
  <nav className="main-nav">
    <div className="logo"><h1>LOGO</h1></div>
    <span className="bar"></span>
     <span className="bar"></span>
     <span className="bar"></span>
    
    <div className="nav-links">
      <ul>
     <li><a><Link to="#homePageID" smooth>HOME</Link></a></li>
     <li><a><Link to="#page-two" smooth>PAGE TWO</Link></a></li>
     <li><a><Link to="#pageThreeID" smooth>PAGE THREE</Link></a></li>
     <li><a><Link to="#pageFourID" smooth>PAGE FOUR</Link></a></li>
     <li><a><Link to="#contactUS" smooth>CONTACT</Link></a></li>
     </ul>
     <a className="toggle-button">
    <Link href="#" >
     <span className="bar">Hello</span>
     <span className="bar"></span>
     <span className="bar"></span>
    </Link>
   </a>
     </div>
     </nav>
  );
}

export default Navbar;