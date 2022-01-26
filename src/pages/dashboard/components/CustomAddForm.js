import React from "react";
import { Box } from "@chakra-ui/react";

import {
  RegularInputControl,
  PasswordInputControl,
  CustomSelect,
} from "../../../components";

export const CustomAddForm = ({ listForm, control, register }) => {
  return listForm.map((element) => (
    <Box mt={{ base: 1, md: 3 }}>
      <label
        color="gray-500"
        pl={{ base: 0.5, sm: 1, md: 2, lg: 2 }}
        w={{ base: 120, sm: 150, md: 180, lg: 200 }}
      >
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
    </Box>
  ));
};
