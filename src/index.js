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
    <>
      {options.type === "success" && (
        <div className="bg-green-600 rounded-lg h-16 w-72 mb-8 flex items-baseline flex-wrap content-center pl-2 gap-2">
          <FaCheckCircle className="text-white " />
          <p className="justify-center flex flex-row text-lg text-white">
            {message}
          </p>
        </div>
      )}

      {options.type === "info" && (
        <div className="bg-blue-500 rounded-lg h-16 w-72 mb-8 flex items-baseline flex-wrap content-center pl-2 gap-2">
          <FaInfoCircle className="text-white " />{" "}
          <p className="justify-center flex flex-row text-lg text-white">
            {message}
          </p>
        </div>
      )}

      {options.type === "error" && (
        <div className="bg-red-500 rounded-lg h-16 w-72 mb-8 flex items-baseline flex-wrap content-center pl-2 gap-2">
          <FaExclamationCircle className="text-white " />
          <p className="justify-center flex flex-row text-lg text-white">
            {message}
          </p>
        </div>
      )}
    </>
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
