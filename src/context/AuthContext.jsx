import React from "react";
import { useReducer } from "react";
import authReducer, { initialState } from "../reducers/authReducer";

export const authContext = React.createContext();

const AuthContext = ({ children }) => {
  const [user, dispatch] = useReducer(authReducer, initialState)

  return (
    <authContext.Provider value={{ user, setUser: dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
