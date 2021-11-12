import React, { createContext, useState, useMemo } from "react";

export const SearchDataContext = createContext();

export const SearchDataContextProvider = (props) => {
  const [vendorsList, setVendorsList] = useState(null);
  const [myListData, setMyListData] = useState([]);
  const [companyList, setCompanyList] = useState(null);

  const vendorsListProviderValue = useMemo(
    () => ({
      vendorsList,
      setVendorsList,
    }),
    [vendorsList, setVendorsList]
  );

  const myListDataProviderValue = useMemo(
    () => ({
      myListData,
      setMyListData,
    }),
    [myListData, setMyListData]
  );

  const companyListProviderValue = useMemo(
    () => ({
      companyList,
      setCompanyList,
    }),
    [companyList, setCompanyList]
  );

  return (
    <SearchDataContext.Provider
      value={{
        vendorsListProviderValue,
        companyListProviderValue,
        myListDataProviderValue,
      }}
    >
      {props.children}
    </SearchDataContext.Provider>
  );
};
