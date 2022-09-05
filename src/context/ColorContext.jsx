import React, { useState } from "react";

export const colorContext = React.createContext();

const ColorContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <colorContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </colorContext.Provider>
  );
};

export default ColorContext;
