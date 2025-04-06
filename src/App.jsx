import React, { useContext } from 'react';
import MyComponent from './mycomponent';
import { MyContext, MyContextProvider } from './context';
import './App.css';

function App() {
  return (
    <MyContextProvider>
      <AppContent />
    </MyContextProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useContext(MyContext);
  
  return (
    <div className={`App ${theme}`}>
      <h1>My React Context App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <MyComponent />
    </div>
  );
}

export default App;
