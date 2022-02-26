import { AxiosInstance } from "../AxiosInstance";

export const apiGetData = async (header) => {
  try {
    const res = await AxiosInstance.get(`/api/${header}`);
    return {
      success: true,
      data: res.data.data,
    };
  } catch (err) {
    return {
      success: false,
      error: err.response.data,
    };
  }
};
