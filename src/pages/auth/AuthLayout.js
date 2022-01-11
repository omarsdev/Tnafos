import React from "react";

import { useHistory } from "react-router-dom";

import { Image } from "@chakra-ui/react";

import { TnafosLogoTitle } from "../../assets/icons";

export const AuthLayout = ({ BGImage, children }) => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-full h-full">
        <Image className="w-full h-full" src={BGImage} objectFit="cover" />
        <div className="h-full absolute w-1/2 top-0 left-0 bg-CBlack bg-opacity-70">
          <div className="flex flex-col w-full h-full">
            <div className="w-full h-full flex justify-center items-center">
              <div className="cursor-pointer" onClick={handleLogoClick}>
                <TnafosLogoTitle />
              </div>
            </div>
            <div className="items-end text-center pb-10">
              <h1 className="text-4xl text-white">B2B Search Engine</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};
