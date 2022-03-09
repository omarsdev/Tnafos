import React, {
  createContext,
  useState,
  useMemo,
  useEffect,
  useContext,
  useRef,
} from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { CloudLightning } from "react-feather";

const SizeContext = createContext();
export const useSize = () => useContext(SizeContext);

export const SizeContextProvider = (props) => {
  const [isLargerThanLg, isLargerThanMd, isLargerThanSm] = useMediaQuery([
    "(min-width: 992px)",
    "(min-width: 768px)",
    "(min-width: 320px)",
  ]);

  const size = useMemo(() => {
    if (isLargerThanLg) return "lg";
    else if (isLargerThanMd) return "md";
    else if (isLargerThanSm) return "sm";
    else return "xs";
  }, [isLargerThanLg, isLargerThanMd, isLargerThanSm]);

  return (
    <SizeContext.Provider
      value={{
        size,
      }}
    >
      {props.children}
    </SizeContext.Provider>
  );
};
