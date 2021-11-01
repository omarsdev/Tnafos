export const getToken = () => {
  return localStorage.getItem("token") || null;
};

export const setUserSession = (token) => {
  localStorage.setItem("token", token);
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
};
