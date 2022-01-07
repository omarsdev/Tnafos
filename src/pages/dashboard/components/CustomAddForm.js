import React from "react";
import { Box } from "@chakra-ui/react";

import { RegularInputControl, PasswordInputControl } from "components";

export const CustomAddForm = ({ listForm, control, register }) => {
  return listForm.map((element) => (
    <Box className="mt-4">
      <label className="w-32 text-left text-gray-500 pl-3">
        {element.head} :
        {element.isPassword ? (
          <PasswordInputControl
            placeHolder={element.placeHolder}
            name={element.name}
            control={control}
            register={register}
            error={element.err}
          />
        ) : (
          <RegularInputControl
            placeHolder={element.placeHolder}
            name={element.name}
            control={control}
            register={register}
            width="100%"
            errors={element.err}
          />
        )}
      </label>
    </Box>
  ));
};
