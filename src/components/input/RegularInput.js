import React from "react";

import { Input as ChakraInput } from "@chakra-ui/react";
import { control, Controller } from "react-hook-form";

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

export const RegularInputControl = ({
  control,
  name,
  placeHolder,
  register,
  width,
  inputType,
  errors,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <RegularInput
          placeholder={placeHolder}
          register={register(`${name}`, { required: true })}
          error={error || errors}
          width={width}
          inputType={inputType}
        />
      )}
    />
  );
};
