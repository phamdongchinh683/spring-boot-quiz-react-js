import { useState, useEffect } from "react";

function useTokens() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (param) => {
    localStorage.setItem("token", JSON.stringify(param));
    setToken(param);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  useEffect(() => {
    setToken(getToken());
  }, []);

  return {
    setToken: saveToken,
    token,
    deleteToken,
    getToken,
    isAuthenticated,
  };
}

export default useTokens;
