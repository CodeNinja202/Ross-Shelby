import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  console.log("Hello")
  return (
    <footer>
    <div className="footer-main-div">
     <p><FacebookIcon/></p>
     <p><TwitterIcon/></p>
    
    </div>
    </footer>
  );
};

export default Footer;