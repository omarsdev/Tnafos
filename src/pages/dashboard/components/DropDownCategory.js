import React from "react";
import { Select, VStack } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

export const DropDownCategory = ({
  width,
  name,
  error,
  list,
  control,
  register,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <VStack>
          <Select
            placeholder="Select Category"
            className="rounded-3xl select-none"
            borderRadius="25"
            focusBorderColor="#F8B916"
            backgroundColor="#fff"
            borderColor={!error ? "#AEAEAE" : "#ff0000"}
            id={name}
            width={!width ? "381px" : width}
            register={register(`${name}`, { required: true })}
            {...rest}
            {...field}
          >
            {list.map((e) => (
              <option value={e.uuid}>{e.name}</option>
            ))}
          </Select>
        </VStack>
      )}
    />
  );
};
