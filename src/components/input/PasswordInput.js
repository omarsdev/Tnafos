import React from "react";

import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Text,
  Box,
  VStack,
} from "@chakra-ui/react";

import { Eye, EyeOff } from "react-feather";
import { Controller } from "react-hook-form";

export const PasswordInput = ({
  register,
  value,
  setValue,
  placeHolder,
  name,
  error,
  width,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  const handleClickEye = () => setShow(!show);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <InputGroup
      width={!width ? "100%" : width}
      // height={{ base: 4, sm: 6, md: 8, lg: 10 }}
      display="flex"
      flexDirection="row"
    >
      {!value && !setValue ? (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor={!error ? "#AEAEAE" : "red"}
          backgroundColor="#fff"
          rounded="3xl"
          userSelect="none"
          borderRadius="25"
          placeholder={placeHolder}
          _placeholder={{ fontSize: { base: 15, md: 16, lg: 17 } }}
          type={show ? "text" : "password"}
          {...register}
          {...rest}
        />
      ) : (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor={!error ? "#AEAEAE" : "red"}
          backgroundColor="#fff"
          rounded="3xl"
          userSelect="none"
          borderRadius="25"
          placeholder={placeHolder}
          _placeholder={{ fontSize: { base: 15, md: 16, lg: 17 } }}
          value={value}
          onChange={handleChange}
          type={show ? "text" : "password"}
          {...rest}
        />
      )}
      <Box w="auto" h="100%" backgroundColor="red">
        <InputRightElement
          width="auto"
          height="100%"
          onClick={handleClickEye}
          cursor="pointer"
          m="auto"
          mr="0.8rem"
        >
          {show ? <Eye size="16" /> : <EyeOff size="16" />}
        </InputRightElement>
      </Box>
    </InputGroup>
  );
};

export const PasswordInputControl = ({
  control,
  name,
  placeHolder,
  register,
  errors,
  width,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name }, fieldState: { error } }) => (
        <VStack>
          <PasswordInput
            // width={width ? width : { base: 150, sm: 250, md: 480, lg: 500 }}
            // width={"100%"}
            placeholder={placeHolder}
            register={register(`${name}`, { required: true })}
            error={error || (errors && errors[name])}
          />
          {error?.message && <Text color="#ff0000">{error?.message}</Text>}
          {errors &&
            errors[name] &&
            errors[name].map((e, i) => (
              <Text color="#ff0000" key={i}>
                {e}
              </Text>
            ))}
        </VStack>
      )}
    />
  );
};
