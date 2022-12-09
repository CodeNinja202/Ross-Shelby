import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from "react-dom/client";
import "./index.css";
import "./homePage.css";
import "./pageTwo.css";
import "./pageThree.css";
import "./pageFour.css";
import "./contactus.css";
import "./navbar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(
  <React.Fragment>
  <CssBaseline />
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.Fragment>
);
