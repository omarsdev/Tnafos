import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "25px",
  // you can also just use 'scale'
  transition: transitions.FADE,
  types: types.INFO,
};

// const AlertTemplate = ({ style, options, message }) => (
//   <div style={style}>
//     {options.type === "info" && "!"}
//     {options.type === "success" && ":)"}
//     {options.type === "error" && ":("}
//     {message}
//   </div>
// );

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
