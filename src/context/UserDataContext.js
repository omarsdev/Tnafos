import React, { createContext, useState, useMemo } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState(null);
  const [userCard, setUserCard] = useState([]);
  const [companyInfo, setCompanyInfo] = useState(null);

  const tokenProviderValue = useMemo(
    () => ({
      userToken,
      setUserToken,
    }),
    [userToken, setUserToken]
  );

  const dataProviderValue = useMemo(
    () => ({
      userData,
      setUserData,
    }),
    [userData, setUserData]
  );

  const cardProviderValue = useMemo(
    () => ({
      userCard,
      setUserCard,
    }),
    [userCard, setUserCard]
  );

  const companyProviderValue = useMemo(
    () => ({
      companyInfo,
      setCompanyInfo,
    }),
    [companyInfo, setCompanyInfo]
  );

  return (
    <UserDataContext.Provider
      value={{
        tokenProviderValue,
        dataProviderValue,
        cardProviderValue,
        companyProviderValue,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
