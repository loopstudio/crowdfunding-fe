import { createContext, useContext, useState } from "react";

import { ACCESS_TOKEN } from "constants";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    (typeof window !== "undefined" && sessionStorage.getItem(ACCESS_TOKEN)) ||
      null
  );

  const login = (accessToken) => {
    sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    setAccessToken(accessToken);
  };

  const logout = () => {
    sessionStorage.removeItem(ACCESS_TOKEN);
    setAccessToken(null);
  };

  const isUserAuthenticated = !!accessToken;

  return (
    <AuthContext.Provider
      value={{ accessToken, login, logout, isUserAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
