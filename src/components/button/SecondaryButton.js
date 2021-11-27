import React, { useRef, useEffect, useState } from "react";

import { Button, Text } from "@chakra-ui/react";

export const SecondaryButton = ({
  name,
  width = { base: "7em", sm: "7em", md: "8em", lg: "9em", xl: "9em" },
  height = { base: "2.5em", sm: "2.5em", md: "3em", lg: "3em", xl: "3em" },
  backgroundColor = "#ffffff",
  borderRadius = "99em",
  buttonType,
  loadingButton,
  ...buttonProps
}) => {
  const [loading, setLoading] = useState(false);

  let ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      buttonProps.onClick && buttonProps.onClick();
      setLoading(!loading);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });
  return (
    <Button
      className="info-box"
      ref={ref}
      isLoading={
        buttonType && (loadingButton || !loadingButton)
          ? loadingButton
          : loading
      }
      loadingText="Loading"
      width={width}
      height={height}
      borderColor="#F8B916"
      borderWidth="2px"
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color="primary"
      _hover={{ bg: "#F8B916", color: "#ffffff" }}
      _focus={{
        outline: "none",
      }}
      {...buttonProps}
    >
      {name}
    </Button>
  );
};
