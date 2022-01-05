// import React, { useState, useEffect } from "react";
// import { Box, Heading } from "@chakra-ui/react";
// import { CustomTable } from "components";
// import { AxiosInstance } from "api";

// export const Incoming = () => {
//   const [list, setList] = useState(null);

//   const paymentsList = async () => {
//     await AxiosInstance.get("/api/dashboard/payment/")
//       .then((res) => {
//         console.log(res.data.data);
//         setList(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     paymentsList();
//   }, []);

//   return (
//     <Box>
//       <CustomTable
//         PageHeadLine={"Estimates - Incoming"}
//         thHeading="List of Estimates - Incoming"
//         list={list}
//         thData={["", "", ""]}
//         addComponent={"addestimate"}
//         subData={[]}
//       />
//     </Box>
//   );
// };
