import React, { createContext, useState, useMemo } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState(null);
  const [userCard, setUserCard] = useState([]);

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

  return (
    <UserDataContext.Provider
      value={{
        tokenProviderValue,
        dataProviderValue,
        cardProviderValue,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};
