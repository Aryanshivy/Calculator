import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>DigiTIME</h1>
        <p>{time}</p>
      </header>
    </div>
  );
}

export default App;