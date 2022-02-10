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
            width={{ base: 150, sm: 250, md: 480, lg: 500 }}
            height={{ base: 4, sm: 6, md: 8, lg: 10 }}
            focusBorderColor="#F8B916"
            borderColor={!error ? "#AEAEAE" : "red"}
            backgroundColor="#fff"
            borderRadius="25"
            placeholder={placeHolder}
            fontSize={{ base: 12, sm: 16, md: 16, lg: 20 }}
            {...register(`${name}`, { required: true })}
            {...rest}
          >
            {optionList.map((e) => (
              <option
                value={e[value]}
                key={e[key]}
                fontSize={{
                  base: "xx-small",
                  sm: "xx-small",
                  md: "sm",
                  lg: "md",
                }}
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
