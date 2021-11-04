import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

export const UserDataContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [userData, setUserData] = useState(null);
  return (
    <UserDataContext.Provider
    value={{
      userTokenProvider: [userToken, setUserToken],
      userDataProvider: [userData, setUserData],
    }}
    //* value ={we only wanna show setUserData variable in Navbar, so we have to invoke it instead of userDataProvider ?? what about userToken}
  >
    {props.children}
    </UserDataContext.Provider>
  );
};
