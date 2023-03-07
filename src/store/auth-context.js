import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLogedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "1") {
      setIsLogedIn(true);
    }
  }, []);
  
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLogedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLogedIn(false);
  };



  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
