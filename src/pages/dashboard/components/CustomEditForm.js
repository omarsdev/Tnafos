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
import { PrimaryButton } from "components";
import { SecondaryButton } from "components";
import React from "react";

export const CustomEditForm = ({
  editListForm,
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
            {editListForm.map((element) => (
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
            ))}
            <Flex mt="5" w="full" ml="320px">
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
