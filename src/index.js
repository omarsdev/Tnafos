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
import { Box, Text } from "@chakra-ui/react";

import { SoftUIControllerProvider } from "context/SoftUI";

const TemplateStyle = ({ backgroundColor, msg, children }) => {
  return (
    <Box
      rounded="lg"
      h="4rem"
      w="18rem"
      mb="2rem"
      display="flex"
      alignItems="baseline"
      flexWrap="wrap"
      alignContent="center"
      pl="0.5rem"
      gap="0.5rem"
      bg={backgroundColor}
    >
      {children}
      <Text
        display="flex"
        flexDirection="row"
        justifyContent="center"
        fontSize="1.125rem"
        lineHeight="1.75rem"
        color="brand.white"
      >
        {msg}
      </Text>
    </Box>
  );
};

const AlertTemplate = ({ options, message }) => {
  return (
    <>
      {options.type === "success" && (
        <TemplateStyle backgroundColor="green.600" msg={message}>
          <FaCheckCircle color="brand.white" />
        </TemplateStyle>
      )}

      {options.type === "info" && (
        <TemplateStyle backgroundColor="blue.600" msg={message}>
          <FaInfoCircle color="brand.white" />
        </TemplateStyle>
      )}

      {options.type === "error" && (
        <TemplateStyle backgroundColor="red.600" msg={message}>
          <FaExclamationCircle color="brand.white" />
        </TemplateStyle>
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
  <SoftUIControllerProvider>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </SoftUIControllerProvider>,
  document.getElementById("root")
);
