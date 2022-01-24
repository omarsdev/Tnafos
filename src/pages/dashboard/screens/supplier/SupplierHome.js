import React, { useState, useEffect } from "react";

const SupplierHome = () => {
  const [supplier, setSupplier] = useState(null);

  const getAllRatings = async () => {
    try {
      const res = await AxiosInstance.get("/api/dashboard/supplier/");

      console.log(res.data.data);
      setRatings(res.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getAllRatings();
  }, []);

  return <div></div>;
};
export default SupplierHome;
