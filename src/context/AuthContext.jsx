import React, { useState } from "react";

export const authContext = React.createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({
    data: null,
    isLogged: false,
  });

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
