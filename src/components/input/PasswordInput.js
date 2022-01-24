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
    <InputGroup width={width}>
      {!value && !setValue ? (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor={!error ? "#AEAEAE" : "red"}
          backgroundColor="#fff"
          rounded="3xl"
          userSelect="none"
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
          rounded="3xl"
          userSelect="none"
          borderRadius="25"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          type={show ? "text" : "password"}
          {...rest}
        />
      )}
      <InputRightElement width="3rem" onClick={handleClickEye} cursor="pointer">
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
            placeholder={placeHolder}
            register={register(`${name}`, { required: true })}
            error={error || (errors && errors[name])}
            width={width}
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
