import React from "react";
import ReactDOM from "react-dom";  // For older React versions
import App from "./App";  // Ensure this path is correct
import "./index.css";  // Ensure this file exists

console.log("Index.js is loading!");  // Add this before the render call

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,  // Note the comma here!
  document.getElementById("root")
);