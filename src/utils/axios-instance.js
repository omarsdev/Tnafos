import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  withCredentials: true,
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;

  return config;
});

AxiosInstance.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    console.log(error.response);
    if (error.response?.data?.message?.toLowerCase() === "unauthorized") {
      localStorage.removeItem("token");
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
