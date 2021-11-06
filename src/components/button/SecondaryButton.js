import React, { useRef, useEffect, useState } from "react";

import { Button } from "@chakra-ui/react";

export const SecondaryButton = ({ name, ...buttonProps }) => {
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
      isLoading={loading}
      loadingText="Loading"
      width="120px"
      height="40px"
      borderColor="#F8B916"
      borderWidth="2px"
      backgroundColor="white"
      borderRadius="30px"
      color="black"
      _hover={{ bg: "#F8B916", color: "white" }}
      _focus={{
        outline: "none",
      }}
      {...buttonProps}
    >
      {name}
    </Button>
  );
};
