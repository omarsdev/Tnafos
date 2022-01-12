import Cookies from "js-cookie";
// https://www.npmjs.com/package/js-cookie

export const getToken = () => {
  return Cookies.get("tnafos_auth");
};

export const setUserSession = (token, maxAge) => {
  Cookies.set("tnafos_auth", token, {
    expires: maxAge,
    domain: "127.0.0.1",
    secure: true,
    sameSite: "lax",
  });
  // https://curity.io/resources/learn/token-handler-spa-tutorial/
};

export const removeUserSession = () => {
  Cookies.remove("tnafos_auth");
};
