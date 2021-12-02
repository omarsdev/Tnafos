import React from "react";

import { Input as ChakraInput } from "@chakra-ui/react";

export const RegularInput = ({
  register,
  input,
  setInput,
  value,
  setValue,
  placeHolder,
  inputType,
  width,
  name,
  error,
  requiredMessage,
  ...rest
}) => {
  const handleChange = (event) => setValue(event.target.value);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInput({ ...input, [name]: value });
  // };

  console.log(error);

  return !value && !setValue ? (
    <ChakraInput
      className="rounded-3xl select-none"
      borderRadius="25"
      focusBorderColor="#F8B916"
      borderColor={!error ? "#AEAEAE" : "#ff0000"}
      backgroundColor="#fff"
      paddingLeft={inputType === "tel" && "80px"}
      placeholder={placeHolder}
      id={name}
      width={!width ? "381px" : width}
      type={inputType}
      // {...(requiredMessage
      //   ? {
      //       ...register(
      //         `${name}`,
      //         requiredMessage ? { required: `${requiredMessage}` } : null
      //       ),
      //     }
      //   : { ...register(`${name}`) })}
      // autoComplete="off"
      // autoFocus="off"
      {...register}
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
      autoComplete="off"
      autoFocus="off"
      {...rest}
    />
  );
};
