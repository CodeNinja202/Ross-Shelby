import React from "react";
import "./index.css";
import { HashLink as Link } from "react-router-hash-link";

window.onload = function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  
  toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navbarLinks.classList.toggle("active");
  });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-title">
        <h1>LOGO</h1>
      </div>
      <a>
      
        <Link href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <a>
              <Link to="#Home" smooth>
                HOME
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="#Page-two" smooth>
                PAGE TWO
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="#Page-three" smooth>
                PAGE THREE
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="#Page-four" smooth>
                PAGE FOUR
              </Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="#contact" smooth>
                CONTACT
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
