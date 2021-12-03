import React, { useEffect, useRef } from "react";
import { Button, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

export const AddButton = ({ name, buttonType, ...buttonProps }) => {
  let ref = useRef(null);

  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      buttonProps.onClick && buttonProps.onClick();
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
      ref={ref}
      //   onClick={handleClick}
      width="12"
      height="12"
      backgroundColor="#F8B916"
      _hover={{ bg: "#D59B06" }}
      borderRadius="30px"
      color="white"
      _focus={{
        outline: "none",
      }}
      size="lg"
      rounded="full"
      type={buttonType ? buttonType : "button"}
      {...buttonProps}
    >
      <Text>
        <AiOutlinePlus />
      </Text>
    </Button>
  );
};
