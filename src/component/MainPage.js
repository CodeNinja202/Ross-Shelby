import React from "react";
import Form from "./Form";
import Homepage from "./Homepage";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import Pagefour from "./Pagefour";
const MainPage = () => {
  return (
    <div className="product-main-div">
<div className="homePage" id="homePageId" ><Homepage/></div>
<div className="pageTwo" id="page-two"><Pagetwo/></div>
<div className="pageThree" id="page-three"><Pagethree/></div>
<div className="pageFour" id="page-four"><Pagefour/></div>
<div className="contactus" id="contact-us-page" ><Form/></div>
    </div>
  );
};

export default MainPage;