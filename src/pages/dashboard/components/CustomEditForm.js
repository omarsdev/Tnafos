import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { PrimaryButton, SecondaryButton } from "../../../components";

export const CustomEditForm = ({
  children,
  isOpen,
  onCancelHandler,
  onUpdate,
  isUpdating,
  errors,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onCancelHandler}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" color="#F8B916">
          Edit your Info by filling up this form
        </DrawerHeader>

        <DrawerBody>
          <HStack
            align="flex-end"
            w="full"
            alignItems="baseline"
            mb="14"
            mt="5"
          >
            <input
              type="file"
              //   onChange={(e) => setPhoto(e.target.files[0])}
              name="choose file"
            />
            <Spacer />
            <SecondaryButton
              name="Upload File"
              // onClick={uploadFile}
            />
          </HStack>
          <form pt="5">
            {children}
            <Flex my="10" w="full" ml="320px">
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
              <Text className="text-center mt-4" color="red">
                {errors?.message}
              </Text>
            )}
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
