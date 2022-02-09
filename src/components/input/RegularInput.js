import React, { Fragment } from "react";

import { HStack, Input as ChakraInput, Text, VStack } from "@chakra-ui/react";
import { control, Controller } from "react-hook-form";
import { Box } from "react-feather";

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
      rounded="3xl"
      userSelect="none"
      borderRadius="25"
      focusBorderColor="#F8B916"
      borderColor={!error ? "#AEAEAE" : "#ff0000"}
      backgroundColor="#fff"
      paddingLeft={inputType === "tel" && "80px"}
      placeholder={placeHolder}
      id={name}
      width={!width ? "100%" : width}
      type={inputType}
      _placeholder={{ fontSize: { base: 15, md: 16 } }}
      {...register}
      {...rest}
    />
  ) : (
    <ChakraInput
      rounded="3xl"
      userSelect="none"
      borderRadius="25"
      focusBorderColor="#F8B916"
      borderColor={!error ? "#AEAEAE" : "red"}
      backgroundColor="#fff"
      paddingLeft={inputType === "tel" && "80px"}
      placeholder={placeHolder}
      id={name}
      width={!width ? "100%" : width}
      value={value}
      onChange={handleChange}
      type={inputType}
      autoComplete="off"
      autoFocus="off"
      _placeholder={{ fontSize: { base: 15, md: 16 } }}
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
  key
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name }, fieldState: { error }, formState }) => (
        <VStack key={key}>
          <RegularInput
            placeholder={placeHolder}
            register={register(`${name}`, { required: true })}
            error={error || (errors && errors[name])}
            inputType={inputType}
            key={key}
          />
          {error?.message && <Text color="#ff0000">{error?.message}</Text>}
          {errors &&
            errors[name] &&
            errors[name].map((e, i) => (
              <Text color="#ff0000" key={i}>
                {e}
              </Text>
            ))}
        </VStack>
      )}
    />
  );
};
