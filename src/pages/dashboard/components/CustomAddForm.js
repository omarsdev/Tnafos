import React from "react";
import { Box } from "@chakra-ui/react";

import {
  RegularInputControl,
  PasswordInputControl,
  CustomSelect,
} from "../../../components";

export const CustomAddForm = ({ listForm, control, register }) => {
  return listForm.map((element) => (
    <Box className="mt-4">
      <label className="w-32 text-left text-gray-500 pl-3">
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
