import React from "react";
import { Box, VStack, FormLabel } from "@chakra-ui/react";

import {
  RegularInputControl,
  PasswordInputControl,
  CustomSelect,
} from "../../../components";

export const CustomAddForm = ({ listForm, control, register, ...rest }) => {
  return listForm.map((element, index) => (
    <Box pt={{ base: 1, sm: 1, md: 2, lg: 4 }} key={index}>
      <VStack>
        <FormLabel textAlign="left" color="gray.500" {...rest} width="100%">
          {element.head}
          {element.isPassword ? (
            <PasswordInputControl
              placeHolder={element.placeHolder}
              name={element.name}
              control={control}
              register={register}
              error={element.err}
              width={element.width}
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
              width={element.width}
            />
          )}
        </FormLabel>
      </VStack>
    </Box>
  ));
};
