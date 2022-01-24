import React from "react";
import { Box, FormLabel } from "@chakra-ui/react";

import {
  RegularInputControl,
  PasswordInputControl,
  CustomSelect,
} from "../../../components";

export const CustomAddForm = ({ listForm, control, register }) => {
  return listForm.map((element) => (
    <Box mt="1rem">
      <FormLabel w="8rem" textAlign="left" color="gray.500" pl="0.75rem">
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
      </FormLabel>
    </Box>
  ));
};
