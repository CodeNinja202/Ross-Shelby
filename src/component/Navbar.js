import React from "react";

import { HashLink as Link  } from "react-router-hash-link";

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const Navbar = () => {
 return (

  <nav className="navbar">
    <div className="brand-title"><h1>LOGO</h1></div>
    <a> <Link  href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </Link >
        </a>
    <div className="navbar-links">
      <ul>
     <li><a><Link to="#homePageID" smooth>HOME</Link></a></li>
     <li><a><Link to="#page-two" smooth>PAGE TWO</Link></a></li>
     <li><a><Link to="#pageThreeID" smooth>PAGE THREE</Link></a></li>
     <li><a><Link to="#pageFourID" smooth>PAGE FOUR</Link></a></li>
     <li><a><Link to="#contactUS" smooth>CONTACT</Link></a></li>
     </ul>
     </div>
     </nav>
  
  );
}

export default Navbar;