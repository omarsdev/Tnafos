import React from "react";

import { Input as ChakraInput } from "@chakra-ui/react";

export const RegularInput = ({
  register,
  value,
  setValue,
  input,
  setInput,
  placeHolder,
  inputType,
  width,
  name,
  error,
  ...rest
}) => {
  //   const handleChange = (event) => setValue(event.target.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return !value && !setValue ? (
    <ChakraInput
      className="rounded-3xl select-none"
      borderRadius="25"
      focusBorderColor="#F8B916"
      borderColor={!error ? "#AEAEAE" : "red"}
      backgroundColor="#fff"
      paddingLeft={inputType === "tel" && "80px"}
      placeholder={placeHolder}
      id={name}
      width={!width ? "381px" : width}
      type={inputType}
      {...register(`${name}`)}
      {...rest}
    />
  ) : (
    <ChakraInput
      className="rounded-3xl select-none"
      borderRadius="25"
      focusBorderColor="#F8B916"
      borderColor={!error ? "#AEAEAE" : "red"}
      backgroundColor="#fff"
      paddingLeft={inputType === "tel" && "80px"}
      placeholder={placeHolder}
      id={name}
      width={!width ? "381px" : width}
      value={value}
      onChange={handleChange}
      type={inputType}
      {...rest}
      autoComplete="off"
      autoFocus="off"
    />
  );
};
