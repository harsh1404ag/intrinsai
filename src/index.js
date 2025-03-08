import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // ✅ Ensure this path is correct
import "./index.css";  // ✅ Ensure this file exists

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
