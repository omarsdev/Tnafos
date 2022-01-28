import React, { Fragment } from "react";

import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Text,
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
      width={{ base: 150, sm: 250, md: 480, lg: 500 }}
      height={{ base: 4, sm: 6, md: 8, lg: 10 }}
    >
      {!value && !setValue ? (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor={!error ? "#AEAEAE" : "red"}
          backgroundColor="#fff"
          className="rounded-3xl select-none"
          borderRadius="25"
          placeholder={placeHolder}
          type={show ? "text" : "password"}
          // {...register(`${name}`)}
          {...register}
          {...rest}
        />
      ) : (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor={!error ? "#AEAEAE" : "red"}
          backgroundColor="#fff"
          className="rounded-3xl select-none"
          borderRadius="25"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          type={show ? "text" : "password"}
          {...rest}
        />
      )}

      <InputRightElement
        onClick={handleClickEye}
        className="cursor-pointer"
        width={{ base: 2, sm: 8, md: 12, lg: 20 }}
      >
        {show ? <Eye /> : <EyeOff />}
      </InputRightElement>
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
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <VStack>
          <PasswordInput
            width={{ base: 150, sm: 250, md: 480, lg: 500 }}
            height={{ base: 4, sm: 6, md: 8, lg: 10 }}
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
