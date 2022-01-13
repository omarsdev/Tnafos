import React, { useRef, useEffect, useState } from "react";

import { Box, Button, Text } from "@chakra-ui/react";

export const PrimaryButton = ({
  width = { base: "7em", sm: "7em", md: "8em", lg: "9em", xl: "9em" },
  height = { base: "2.5em", sm: "2.5em", md: "3em", lg: "3em", xl: "3em" },
  type = "button",
  name,
  Logo,
  loadingButton,
  ...props
}) => {
  const [loading, setLoading] = useState(false);

  let ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      // props.onClick && props.onClick();
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
        type && (loadingButton || !loadingButton) ? loadingButton : loading
      }
      loadingText="Loading"
      width={width}
      height={height}
      backgroundColor="brand.primary"
      _hover={{ bg: "primary.600" }}
      borderRadius="99em"
      color="brand.white"
      _focus={{
        outline: "none",
      }}
      type={type}
      {...props}
    >
      {Logo && (
        <Box mx={15}>
          <Logo />
        </Box>
      )}
      <Text>{name}</Text>
    </Button>
  );
};
