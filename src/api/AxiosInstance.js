import axios from "axios";
import Cookies from "js-cookie";


export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  withCredentials: true,
});

AxiosInstance.interceptors.request.use(function (config) {
  // const token = localStorage.getItem("token");
  const token = Cookies.get("tnafos_auth")
  if (token) config.headers.Authorization = "Bearer " + token;

  return config;
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    if (
      error.response?.data?.message?.toLowerCase() === "unauthorized" ||
      error.response?.data?.message?.toLowerCase() === "unauthenticated."
      // error.response.status === 401
    ) {
      localStorage.removeItem("token");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
