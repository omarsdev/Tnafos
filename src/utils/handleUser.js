export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const setUserSession = (token) => {
  // localStorage.setItem("token", token);
  console.log(token);
  const auth_token = `tnafos_auth=${token}`;
  document.cookie =
    auth_token + ";samesite=lax;Secure;domain=tnafos.com;max-age=1209600";

  //
  // https://curity.io/resources/learn/token-handler-spa-tutorial/
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
};
