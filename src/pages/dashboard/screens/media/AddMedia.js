import React, { useState, useContext, useRef } from "react";
import { HStack, Text, Box, Heading, Flex, Spacer } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { PrimaryButton, SecondaryButton } from "../../../../components";
import { AxiosInstance, media } from "../../../../api";
import { AlertContext } from "../../../../context";

const AddMedia = () => {
  const { alertProviderValue } = useContext(AlertContext);
  const { setAlert } = alertProviderValue;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [err, setErr] = useState(null);

  const history = useHistory();

  const [photo, setPhoto] = useState(null);
  let inputRef = useRef(null);

  const addNewMedia = async (data) => {
    await AxiosInstance.post("/api/dashboard/media/store", data)
      .then((res) => {
        setAlert({
          message: "new media has been added!",
          type: "success",
        });
        history.push("/dashboard/mediahome");
      })
      .catch((err) => {
        setErr(err.response.data.errors);
        setAlert({
          message: `${err.response.data.message}`,
          type: "error",
        });
      });
  };

  const handleCancel = () => {
    history.push("/dashboard/servicehome");
  };

  const handleFileInput = (e) => {
    setPhoto(e.target.files[0]);
  };

  //* media file upload:
  // const uploadFile = (photo) => {
  //   if (!photo) return;
  //   media(uuid, "user", photo);
  // };

  return (
    <Box boxShadow="2xl" rounded="3xl" boxSize="2xl">
      <Box px="20" mt="10">
        <Heading
          color="#F8B916"
          fontSize="x-large"
          fontWeight="lg"
          alignItems="baseline"
        >
          Adding New Media
        </Heading>

        <Flex w="full" pl="5" mt="16">
          <input
            type="file"
            onChange={(ev) => handleFileInput(ev)}
            ref={inputRef}
          />
          <Spacer />
          <SecondaryButton
            // onClick={photoUploadHandler}
            name="Upload photo"
          />
        </Flex>

        <form mt="5">
          <HStack
            mt="8"
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            ml={"24"}
          >
            <PrimaryButton
              name="Add Media"
              // onClick={handleSubmit(addNewMedia)}
              buttonType="submit"
            />

            <SecondaryButton
              name="Cancel"
              onClick={handleCancel}
              buttonType="button"
            />
          </HStack>
          <Box>
            {errors?.message && (
              <Text textAlign="center" mt="1rem" color="red">
                {errors?.message}
              </Text>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddMedia;
