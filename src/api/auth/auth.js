import { AxiosInstance } from "../AxiosInstance";

export const apiAuth = async (data, type) => {

  try {
    const res = await AxiosInstance.post(`/api/${type}`, data);
    return {
      success: true,
      token: res.data.data.token,
    };
  } catch (err) {
    return {
      success: false,
      error: err.response.data,
    };
  }
};
