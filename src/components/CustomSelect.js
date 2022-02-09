import React from "react";
import { Select, VStack, Text } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

export const CustomSelect = ({
  control,
  name,
  placeHolder,
  register,
  errors,
  width,
  optionList,
  value,
  key,
  displayValue,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name }, fieldState: { error } }) => (
        <VStack>
          <Select
            rounded="3xl"
            _selection="none"
            width={!width ? "100%" : width}
            focusBorderColor="#F8B916"
            borderColor={!error ? "#AEAEAE" : "red"}
            backgroundColor="#fff"
            borderRadius="25"
            placeholder={placeHolder}
            fontSize={{ base: 15, md: 16, lg: 17 }}
            {...register(`${name}`, { required: true })}
            {...rest}
            key={key}
          >
            {optionList.map((e, index) => (
              <option
                value={e[value]}
                key={index}
              >
                {e[displayValue]}
              </option>
            ))}
          </Select>
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
