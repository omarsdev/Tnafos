import React from "react";

import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";

import "focus-visible/dist/focus-visible";

export const CheckBox = ({
  name,
  value,
  setValue,
  register,
  size,
  ...rest
}) => {
  const onCheckHandler = () => setValue(!value);

  return !value && !setValue ? (
    <ChakraCheckbox
      _focusVisible={{ shadow: "outline" }}
      _focus={{ shadow: "none" }}
      colorScheme="#F8B916"
      defaultIsChecked
      {...register(`${name}`)}
      {...rest}
    >
      {name}
    </ChakraCheckbox>
  ) : (
    <ChakraCheckbox
      _focusVisible={{ shadow: "outline" }}
      _focus={{ shadow: "none" }}
      colorScheme="#F8B916"
      defaultIsChecked
      isChecked={value}
      onChange={onCheckHandler}
      {...rest}
    >
      {name}
    </ChakraCheckbox>
  );
};
