import React from "react";

function useTokens() {
  const getToken = () => {
    const tokenString = localStorage.getItem("Token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = React.useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("Token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("Token");
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    deleteToken,
    getToken,
  };
}

export default useTokens;
