import React from "react";

function useTokens() {
  const getToken = () => {
    const tokenString = localStorage.getItem("loginUser");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = React.useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("loginUser", JSON.stringify(userToken));
    setToken(userToken);
  };

  const deleteToken = () => {
    localStorage.removeItem("loginUser");
    setToken(null);
  };

  return {
    setToken: saveToken,
    token,
    deleteToken,
  };
}

export default useTokens;
