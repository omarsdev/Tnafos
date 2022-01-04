// import React from "react";
// import { Box, Heading, HStack } from "@chakra-ui/react";
// import { useForm } from "react-hook-form";
// import { AxiosInstance } from "api";
// import { useHistory } from "react-router-dom";
// import {
//   RegularInputControl,
//   SecondaryButton,
//   PrimaryButton,
// } from "components";

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
//   control,
// } = useForm();

// export const AddForm = ({
//   component,
//   componentHome,
//   inputName,
//   input_name,
//   createComponent,
//   handleCancel,
//   err,
//   isUpdating,
// }) => {
//   return (
//     <Box overflowY="scroll" w="full">
//       <Box
//         px="20"
//         mt="6"
//         boxShadow="2xl"
//         rounded="3xl"
//         w="750px"
//         ml="40"
//         bg="white"
//       >
//         <Heading
//           color="#F8B916"
//           fontSize="3xl"
//           fontWeight="lg"
//           alignItems="baseline"
//           pt="4"
//           mb="12"
//         >
//           Fill in this form to add new {component}.
//         </Heading>

//         <form>
//           <Box className="mt-4">
//             <label className="w-32 text-left text-gray-500 pl-3">
//               {inputName}
//               <RegularInputControl
//                 placeHolder={input_name}
//                 name={input_name}
//                 control={control}
//                 register={register}
//                 width="100%"
//                 errors={err}
//               />
//             </label>
//           </Box>

//           <HStack spacing="10px" py="10" ml="40">
//             <PrimaryButton
//               name="SAVE"
//               onClick={handleSubmit(createComponent)}
//               loadingButton={isUpdating}
//             />

//             <SecondaryButton onClick={handleCancel} name="CANCEL" />
//           </HStack>
//         </form>
//       </Box>
//     </Box>
//   );
// };
