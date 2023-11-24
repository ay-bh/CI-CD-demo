import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'; // Import the Calculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Calculator</h1>
        <Calculator /> {/* Include the Calculator component */}
      </header>
    </div>
  );
}

export default App;
