import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Company Logo" className="logo" />
        <div className="text-container">
          <h1>Hello from StateStreet Interns</h1>
          <p>Karan & Seshank</p>
        </div>
      </header>
    </div>
  );
}

export default App;
