import Cookies from "js-cookie";

export const getToken = () => {
  // console.log(Cookies.get("tnafos_auth"));
  return Cookies.get("tnafos_auth");
  // return localStorage.getItem("token") || null;
};

export const setUserSession = (token) => {
  // localStorage.setItem("token", token);
  console.log(token);
  const auth_token = `tnafos_auth=${token}`;
  document.cookie =
    auth_token + ";samesite=lax;Secure;domain=127.0.0.1;max-age=1209600";

  //
  // https://curity.io/resources/learn/token-handler-spa-tutorial/
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
};
