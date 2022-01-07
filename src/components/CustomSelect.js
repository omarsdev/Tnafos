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
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name }, fieldState: { error } }) => (
        <VStack>
          <Select
            focusBorderColor="#F8B916"
            borderColor={!error ? "#AEAEAE" : "red"}
            backgroundColor="#fff"
            className="rounded-3xl select-none"
            borderRadius="25"
            placeholder={placeHolder}
            width={!width ? "100%" : width}
            {...register(`${name}`, { required: true })}
            {...rest}
          >
            {optionList.map((e) => (
              <option value={e.short_name} key={e.uuid}>
                {e.short_name}
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
