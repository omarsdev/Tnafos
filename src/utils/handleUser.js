import Cookies from "js-cookie";

export const getToken = () => {
  // return Cookies.get("tnafos_auth");
  return localStorage.getItem("tnafos_auth");
};

export const setUserSession = (token, maxAge) => {
  // Cookies.set("tnafos_auth", token, {
  //   expires: maxAge,
  //   domain: "127.0.0.1",
  //   secure: true,
  //   sameSite: "lax",
  // });
  // https://curity.io/resources/learn/token-handler-spa-tutorial/
  localStorage.setItem("tnafos_auth");
};

export const removeUserSession = () => {
  // Cookies.remove("tnafos_auth");
  localStorage.removeItem("tnafos_auth");
};
