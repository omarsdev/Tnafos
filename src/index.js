import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ options, message }) => {
  return (
    <div className="bg-blue-500 rounded-lg h-16 w-60 mb-8 flex items-baseline flex-wrap content-center pl-2 gap-2">
      <div className="bg-green-500 ">
        {options.type === "success" && (
          <FaCheckCircle className="text-white " />
        )}
      </div>
      <div className="bg-blue-500">
        {options.type === "info" && <FaInfoCircle className="text-white " />}
      </div>
      <div className="bg-yellow-400 ">
        {options.type === "error" && (
          <FaExclamationCircle className="text-black bg-red-500" />
        )}
      </div>
      <p className="justify-center flex flex-row text-lg text-white">
        {message}
      </p>
    </div>
  );
};

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 6000,
  offset: "25px",
  transition: transitions.SCALE,
};

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById("root")
);
