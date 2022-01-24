import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "../../../components";

export const CustomEditForm = ({
  children,
  onCancelHandler,
  onUpdate,
  isUpdating,
  errors,
}) => {
  return (
    <form pt="5">
      {children}
      <Flex my="10" w="full" ml="220px">
        <PrimaryButton
          name="Update"
          onClick={onUpdate}
          loadingButton={isUpdating}
          buttonType="submit"
          mx="2"
        />

        <SecondaryButton
          name="Cancel"
          onClick={onCancelHandler}
          buttonType="button"
        />
        {/* </HStack> */}
      </Flex>
      {errors?.message && (
        <Text textAlign="center" mt="1rem" color="red">
          {errors?.message}
        </Text>
      )}
    </form>
  );
};
