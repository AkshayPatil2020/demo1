import React from 'react';
import './App.css';
import Main from './Components/main';

export const ThemeContext = React.createContext('pink');

function App() {
  return (
    <ThemeContext.Provider value="grey">
    <div className="App">
      <Main />
      </div>
      </ThemeContext.Provider>
  );
}

export default App;
