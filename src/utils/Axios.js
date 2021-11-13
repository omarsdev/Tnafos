import axios from "axios";
import { getToken, removeUserSession } from "./";

const apiURL = "https://api.tnafos.com/api";

const handlePost = async (url, dataToBeSent) => {
  try {
    const resp = await axios.post(`${apiURL}/${url}`, dataToBeSent);
    // console.log(resp.data.data);
    // setUserSession(resp.data.data.token);
    return resp.data.data.token;
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      resp: {
        message: "Something went wrong!",
      },
    };
  }
};

export const handleLogin = async (user) => {
  try {
    const response = await handlePost("login", user);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
  }
};

export const handleRegister = async (user) => {
  try {
    const response = await handlePost("register", user);
    // console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};

export const handleTokenRequest = async (T) => {
  const token = getToken() || T; //* T: reffers to user token in case it's stored in context provider
  if (token) {
    try {
      const response = await axios.get(`${apiURL}/dashboard/user/my-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (response.data.data) {
        return {
          success: true,
          data: response.data.data,
        };
      }
    } catch (error) {
      console.log(error.response);
      removeUserSession();
      return {
        success: false,
      };
    }
  } else {
    return {
      success: false,
    };
  }
};

export const handleSearch = async (searchData) => {
  const response = await axios.get(
    `${apiURL}/services/search?search=${searchData}`
  );
  try {
    if (response.data.data) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// export const createNewUser = async (userData) => {
//   const token = getToken(); //* without token there will be an error (401: unauthorized) which means the user has to ensure his identity.
//   try {
//     const RESP = await axios.post(`${apiURL}/dashboard/user/create`, userData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: "application/json",
//       },
//     });
//     // console.log(RESP);
//     return {
//       success: true,
//       data: RESP.data.data,
//     };
//   } catch (error) {
//     // console.log("errors", error.response);
//     return {
//       success: false,
//       errors: error.response.data.errors,
//       message: error.response.data.message,
//     };
//   }
// };

// export const showUsersList = async () => {
//   const token = getToken();
//   try {
//     // const USERS = instanse.get('/user', instanse.defaults.headers(token));
//     const USERS = await axios.get(`${apiURL}/dashboard/user`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: "application/json",
//       },
//     });
//     return USERS.data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getUser = async (uuid) => {
//   const token = getToken(); //* grab the token to be autherized. (note: this differs to the uuid)
//   if (token) {
//     try {
//       const uInfo = await axios.get(`${apiURL}/dashboard/user/${uuid}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });
//       console.log(uInfo.data.data);
//       return {
//         success: true,
//         data: uInfo.data.data,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         error: error,
//       };
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const updateUserInfo = async (uuid, dataToBeUpdated) => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.put(
//         `${apiURL}/dashboard/user/${uuid}/update`,
//         dataToBeUpdated,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//         }
//       );
//       return {
//         success: true,
//         data: resp.data.data,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         errors: error.response.data.errors,
//         message: error.response.data.message,
//       };
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const showProfile = async () => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.get(`${apiURL}dashboard/user/my-profile/`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });
//       console.log(resp.data);
//       return resp.data;
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const createService = async (data) => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.post(
//         `${apiURL}/dashboard/service/create`,
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//         }
//       );
//       return {
//         success: true,
//         data: resp.data.data,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         errors: error.response.data,
//         message: error.response.data,
//       };
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const showServicesList = async () => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.get(`${apiURL}/dashboard/service`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       });
//       console.log(resp);
//       return {
//         success: true,
//         data: resp.data.data,
//       };
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const updateService = async (uuid, dataToBeUpdated) => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.put(
//         `${apiURL}/dashboard/service/${uuid}/update`,
//         dataToBeUpdated,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//         }
//       );
//       return {
//         success: true,
//         data: resp.data.data,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         error: error,
//       };
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

// export const createCompany = async (data) => {
//   const token = getToken();
//   if (token) {
//     try {
//       const resp = await axios.post(
//         `${apiURL}/dashboard/company/create`,
//         data,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "application/json",
//           },
//         }
//       );
//       return {
//         success: true,
//         data: resp.data.data,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         error: error,
//       };
//     }
//   } else {
//     return {
//       success: false,
//     };
//   }
// };

export const showCompany = async () => {
  const token = getToken();
  if (token) {
    try {
      const resp = await axios.get(`${apiURL}/dashboard/company`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      return {
        success: true,
        data: resp.data.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error,
      };
    }
  } else {
    return {
      success: false,
    };
  }
};

export const updateCompany = async (dataToBeUpdated) => {
  console.log(dataToBeUpdated);
  const token = getToken();
  if (token) {
    try {
      const resp = await axios.put(
        `${apiURL}/dashboard/company/update`,
        dataToBeUpdated,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      return {
        success: true,
        data: resp.data.data,
      };
    } catch (error) {
      console.log(error.response);
      return {
        success: false,
        error: error,
      };
    }
  } else {
    return {
      success: false,
    };
  }
};
