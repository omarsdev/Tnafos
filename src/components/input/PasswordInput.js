import React from "react";

import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { Eye, EyeOff } from "react-feather";

export const PasswordInput = ({
  register,
  value,
  setValue,
  placeHolder,
  name,
  ...rest
}) => {
  const [show, setShow] = React.useState(false);
  const handleClickEye = () => setShow(!show);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <InputGroup width="381px">
      {!value && !setValue ? (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor="#AEAEAE"
          backgroundColor="#fff"
          className="rounded-3xl select-none"
          w="381px"
          borderRadius="25"
          placeholder={placeHolder}
          type={show ? "text" : "password"}
          {...register(`${name}`)}
          {...rest}
        />
      ) : (
        <ChakraInput
          focusBorderColor="#F8B916"
          borderColor="#AEAEAE"
          backgroundColor="#fff"
          className="rounded-3xl select-none"
          w="381px"
          borderRadius="25"
          placeholder={placeHolder}
          value={value}
          onChange={handleChange}
          type={show ? "text" : "password"}
          {...rest}
        />
      )}
      <InputRightElement
        width="3rem"
        onClick={handleClickEye}
        className="cursor-pointer"
      >
        {show ? <Eye /> : <EyeOff />}
      </InputRightElement>
    </InputGroup>
  );
};
