import React, { useState, useEffect } from "react";

import Header from "../../components/Header"

import { AxiosInstance } from "api";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

const Home = ({ company }) => {
  return (<>
    <Header name={company.name} type={company.type} />
    <SuiBox mt={10}>
      <ProfileInfoCard
        title="profile information"
        description={company.bio}
        info={{
          type: company.type,
          Name: company.name,
          Email: company.email,
          establishment_year: company.establishment_year,
          telephone: company.telephone,
          Address: company.address,
          total_employees: company.total_employees
        }}
        // social={[
        //   {
        //     link: "https://www.facebook.com/CreativeTim/",
        //     icon: <FacebookIcon />,
        //     color: "facebook",
        //   },
        //   {
        //     link: "https://twitter.com/creativetim",
        //     icon: <TwitterIcon />,
        //     color: "twitter",
        //   },
        //   {
        //     link: "https://www.instagram.com/creativetimofficial/",
        //     icon: <InstagramIcon />,
        //     color: "instagram",
        //   },
        // ]}
        action={{ route: "company/edit", tooltip: "Edit Profile" }}
      />
    </SuiBox>

  </>);
};

// // Soft UI Dashboard PRO React components
// import SuiBox from "components/SuiBox";
// import SuiBadgeDot from "components/SuiBadgeDot";
// import SuiButton from "components/SuiButton";
// import SuiTypography from "components/SuiTypography";

// // Soft UI Dashboard PRO React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
// import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
// import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
// import SalesTable from "examples/Tables/SalesTable";
// import DataTable from "examples/Tables/DataTable";

// // Overview page components
// import ChannelsChart from "layouts/ecommerce/overview/components/ChannelsChart";

// // Data
// import defaultLineChartData from "layouts/ecommerce/overview/data/defaultLineChartData";
// import horizontalBarChartData from "layouts/ecommerce/overview/data/horizontalBarChartData";
// import salesTableData from "layouts/ecommerce/overview/data/salesTableData";
// import dataTableData from "layouts/ecommerce/overview/data/dataTableData";

// import { useRouteMatch, useHistory } from "react-router-dom";
// import {
//   Center,
//   Spinner,
//   GridItem,
//   Box,
//   Text,
//   Heading,
//   VStack,
//   Divider,
//   useDisclosure,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
// import { FiEdit } from "react-icons/fi";
// import { FaStar, FaSync } from "react-icons/fa";

// import CompanyCard from "./CompanyCard";
// import { CustomAddForm, CustomEditForm } from "../../components";
// import { AlertContext } from "../../../../context/AlertContext";
// import { AxiosInstance } from "../../../../api";
// import { PrimaryButton, SecondaryButton } from "../../../../components";
// import CustomModal from "../../components/CustomModal";

// const Home = () => {
//   const [companyInfo, setcompanyInfo] = useState(null);

//   const { alertProviderValue } = useContext(AlertContext);
//   const { setAlert } = alertProviderValue;

//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//     control,
//   } = useForm();

//   const [err, setErr] = useState(null);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const history = useHistory();

//   const resetHooksForm = (data) => {
//     reset({
//       name: data.name,
//       type: data.type,
//       cr: data.cr,
//       vat: data.vat,
//       establishment_year: data.establishment_year,
//       total_employees: data.total_employees,
//       bio: data.bio,
//       telephone: data.telephone,
//       fax: data.fax,
//       email: data.email,
//       website: data.web,
//       country_id: data.country_id,
//       city: data.city,
//       po_box: data.po_box,
//       zip_code: data.zip_code,
//       address: data.address,
//       location: data.location,
//       category_id: data.category_id,
//     });
//   };

//   const showCompany = async () => {
//     try {
//       const res = await AxiosInstance.get("/api/dashboard/company");
//       setcompanyInfo(res.data.data);
//       let company = res.data.data;
//       delete company.country;
//       delete company.admin;
//       delete company.category;
//       resetHooksForm(res.data.data);
//     } catch (err) {
//       history.push("/dashboard/company");
//     }
//   };

//   const onCancelHandler = () => {
//     if (isUpdating) return;
//     resetHooksForm(companyInfo);
//     setErr(null);
//     onClose();
//   };

//   const onUpdateCompany = async (dataToBeUpdated) => {
//     setErr(null);
//     setIsUpdating(true);
//     try {
//       const res = await AxiosInstance.put(
//         "/api/dashboard/company/update",
//         dataToBeUpdated
//       );

//       setIsUpdating(false);
//       setAlert({
//         message: "Company info has been updated successfully!",
//         type: "success",
//       });
//       history.push(`/dashboard/company`);
//     } catch (err) {
//       setIsUpdating(false);
//       setErr(err.response.data.errors);
//       setAlert({
//         message: `${err.response.data.message}`,
//         type: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     showCompany();
//   }, []);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       {!companyInfo ? (
//         <Center h="70vh" w="100%">
//           <Spinner size={{ base: "md", lg: "xl" }} color="#F8B916" />
//         </Center>
//       ) : (
//         <SuiBox py={3}>
//           <SuiBox mb={3}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} lg={4}>
//                 <SalesTable title="Sales by Country" rows={salesTableData} />
//               </Grid>
//             </Grid>
//           </SuiBox>
//           )
//         </SuiBox>
//       )}
//     </DashboardLayout>
//   );
// };

export default Home;
