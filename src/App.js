import React from "react";
import Footer from './component/Footer'
import Form from './component/Form'
import Homepage from './component/Homepage'
import Navbar from './component/Navbar'
import Pagefour from './component/Pagefour'
import Pagethree from './component/Pagethree'
import Pagetwo from './component/Pagetwo'



const App = () => {
  return (
    <div className="main-app-div">
      <Navbar />

      <div className="homePage" id="Home">
        <Homepage />
      </div>
      <div className="pageTwo" id="Page-two">
        <Pagetwo />
      </div>
      <div className="pageThree" id="Page-three">
        <Pagethree />
      </div>
      <div className="pageFour" id="Page-four">
        <Pagefour />
      </div>
      <div className="contactus" id="contact">
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default App;
