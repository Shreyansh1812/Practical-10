import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [myState, setMyState] = useState('Hello from Context!');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <MyContext.Provider value={{ myState, setMyState, theme, toggleTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };