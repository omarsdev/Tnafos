import AxiosInstance from "../axios-instance";

export const apiRegister = async (data) => {
  await AxiosInstance.post("/api/register", data)
    .then((res) => {
      return {
        success: true,
        token: res.data.data.token,
      };
    })
    .catch((err) => {
      return {
        success: false,
        error: err.response.data,
      };
    });
};

export const apiLogin = async (data) => {
  await AxiosInstance.post("/api/login", data)
    .then((res) => {
      return {
        success: true,
        token: res.data.data.token,
      };
    })
    .catch((err) => {
      return {
        success: false,
        error: err.response.data,
      };
    });
};
