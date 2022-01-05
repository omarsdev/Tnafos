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
//       {/* <Heading
//         textColor="gray.600"
//         fontWeight="medium"
//         fontSize="xx-large"
//         fontFamily="inhirit"
//         alignItems="baseline"
//         ml="5"
//       >
//         Invoices - Incoming
//       </Heading> */}
//       <CustomTable
//         PageHeadLine={"Invoices - Incoming"}
//         thHeading="List of Invoices - Incoming"
//         list={list}
//         thData={[
//           "Invoices-number",
//           "Amount",
//           "Invoices-method",
//           "Date",
//           "Transaction-ID",
//           "Notes",
//           "Action",
//         ]}
//       />
//     </Box>
//   );
// };

import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { CustomTable } from "../../components";
import { AxiosInstance } from "api";

export const Incoming = () => {
  const [list, setList] = useState(null);

  const paymentsList = async () => {
    await AxiosInstance.get("/api/dashboard/payment/")
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    paymentsList();
  }, []);

  return (
    <Box>
      {/* <Heading
        textColor="gray.600"
        fontWeight="medium"
        fontSize="xx-large"
        fontFamily="inhirit"
        alignItems="baseline"
        ml="5"
      >
        Invoices - Incoming
      </Heading> */}
      <CustomTable
        PageHeadLine={"Invoices - Incoming"}
        thHeading="List of Invoices - Incoming"
        list={list}
        thData={[
          "Invoices-number",
          "Amount",
          "Invoices-method",
          "Date",
          "Transaction-ID",
          "Notes",
          "Action",
        ]}
      />
    </Box>
  );
};
