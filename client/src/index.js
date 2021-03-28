import React from "react";
import ReactDOM from "react-dom";

import { StyleReset } from "react-atomize";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StyleReset />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
