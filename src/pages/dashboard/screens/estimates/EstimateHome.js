// import React from "react";
// import { EstimateCard, AddEstimate, Outgoing, Incoming } from "./";
// import {
//   Link,
//   useRouteMatch,
//   Switch,
//   Route,
//   useHistory,
// } from "react-router-dom";
// import { Box, Heading, Button, IconButton, HStack } from "@chakra-ui/react";
// import { AiOutlinePlus } from "react-icons/ai";

// export const EstimateHome = () => {
//   const match = useRouteMatch();
//   return (
//     <Switch>
//       <Route path={`${match.path}`}>
//         <HStack w="full" spacing={"900px"} py="5">
//           <Heading
//             textColor="gray.600"
//             fontWeight="medium"
//             fontSize="xx-large"
//             fontFamily="inhirit"
//             alignItems="baseline"
//             ml="5"
//           >
//             Estimates
//           </Heading>

//           <Box>
//             <Link to={`${match.url}/addinvoice`}>
//               <IconButton
//                 as={Button}
//                 colorScheme="yellow"
//                 size="lg"
//                 icon={<AiOutlinePlus />}
//                 rounded="full"
//               ></IconButton>
//             </Link>
//           </Box>
//         </HStack>
//         {/* <CustomTable /> */}
//       </Route>
//       <Route path={`${match.path}/addestimate`} component={AddEstimate} />
//       <Route path={`${match.path}/incoming`} component={Incoming} />
//       <Route path={`${match.path}/outgoing`} component={Outgoing} />
//       <Route path={`${match.path}/estimatecard`} component={EstimateCard} />
//     </Switch>
//   );
// };
