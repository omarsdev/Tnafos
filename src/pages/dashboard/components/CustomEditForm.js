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
      <Flex my="10" w="full" justify="center">
        <PrimaryButton
          name="Update"
          onClick={onUpdate}
          loadingButton={isUpdating}
          buttonType="submit"
          mx="2"
          width={{ base: 20, sm: 20, md: 32, lg: 36 }}
          height={{ base: 8, md: 12 }}
          fontSize={{
            base: "xx-small",
            sm: "xx-small",
            md: "sm",
            lg: "md",
          }}
        />

        <SecondaryButton
          name="Cancel"
          onClick={onCancelHandler}
          buttonType="button"
          width={{ base: 20, sm: 20, md: 32, lg: 36 }}
          height={{ base: 8, md: 12 }}
          fontSize={{
            base: "xx-small",
            sm: "xx-small",
            md: "sm",
            lg: "md",
          }}
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
