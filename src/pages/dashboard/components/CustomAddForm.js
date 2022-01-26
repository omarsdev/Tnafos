import React from "react";
import { Box, VStack } from "@chakra-ui/react";

import {
  RegularInputControl,
  PasswordInputControl,
  CustomSelect,
} from "../../../components";

export const CustomAddForm = ({ listForm, control, register }) => {
  return listForm.map((element) => (
    <Box pt={{ base: 1, sm: 1, md: 2, lg: 4 }}>
      <VStack fontSize={{ base: "x-small", sm: "sm", md: "md", lg: "md" }}>
        <label className=" text-left text-gray-500 ">
          {element.head}
          {element.isPassword ? (
            <PasswordInputControl
              placeHolder={element.placeHolder}
              name={element.name}
              control={control}
              register={register}
              error={element.err}
            />
          ) : element.isSelect ? (
            <CustomSelect
              control={control}
              register={register}
              placeHolder={element.placeHolder}
              name={element.name}
              errors={element.err}
              optionList={element.optionList}
              value={element.value}
              key={element.uuid}
              displayValue={element.displayValue}
            />
          ) : (
            <RegularInputControl
              placeHolder={element.placeHolder}
              name={element.name}
              control={control}
              register={register}
              errors={element.err}
              inputType={element.inputType}
            />
          )}
        </label>
      </VStack>
    </Box>
  ));
};
