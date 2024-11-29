import { useEffect, useState } from "react";

function useTokens() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    try {
      return JSON.parse(tokenString) || {};
    } catch {
      return {};
    }
  };

  const [token, setToken] = useState(getToken()?.token || null);

  const saveToken = (param) => {
    localStorage.setItem("token", JSON.stringify(param));
    setToken(param?.token || null);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isAuthenticated = () => {
    return !!token;
  };

  useEffect(() => {
    const storedToken = getToken()?.token || null;
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);

  return {
    setToken: saveToken,
    deleteToken,
    getToken,
    isAuthenticated,
    token,
  };
}

export default useTokens;
