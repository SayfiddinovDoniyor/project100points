import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [mode, setMode] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [names, setNames] = useState('');
  const [result, setResult] = useState('');

  const generateRandomName = () => {
    const syllables = [
      "ab", "ul", "lo", "di", "yor", "bek", "an", "or", "no", "za", "sha", "ra",
      "mi", "la", "zo", "ka", "na", "ur", "to", "mu", "li", "ro", "ta", "ga" ,"xon","jon"
    ];
  
    const length = Math.floor(Math.random() * 3) + 2; 
    let name = "";
  
    for (let i = 0; i < length; i++) {
      name += syllables[Math.floor(Math.random() * syllables.length)];
    }
  
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  

  const handleRandomize = () => {
    if (mode === 'numbers') {
      const minVal = parseInt(min);
      const maxVal = parseInt(max);
      if (!isNaN(minVal) && !isNaN(maxVal) && minVal <= maxVal) {
        const random = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
        setResult(`🎲 Random Number: ${random}`);
      } else {
        setResult('❌ Invalid number range');
      }
    } else if (mode === 'names') {
      const nameList = names.split(',').map(name => name.trim()).filter(name => name !== '');
      if (nameList.length > 0) {
        const randomName = nameList[Math.floor(Math.random() * nameList.length)];
        setResult(`🎉 Random Name: ${randomName}`);
      } else {
        setResult('❌ Please enter at least one name');
      }
    }
    else if (mode === 'uzbek') {
      const randomName = generateRandomName();
      setResult(`Your baby's name is  ${randomName}`);
    }
    
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Randomizer</h1>
      </header>

      <nav className="menu">
        <label>Select Type:</label>
        <select value={mode} onChange={(e) => {
          setMode(e.target.value);
          setResult('');
        }}>
          <option value="">-- Choose --</option>
          <option value="numbers">Numbers</option>
          <option value="names">Names</option>
          <option value="uzbek">Generated Name</option>

        </select>
      </nav>

      <main className="main-content">
        {mode === 'numbers' && (
          <div>
            <h2>Randomize Numbers</h2>
            <input
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        )}

        {mode === 'names' && (
          <div>
            <h2>Randomize Names</h2>
            <textarea
              rows="4"
              placeholder="Enter names separated by commas"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </div>
        )}

        {mode && (
          <button className="randomize-btn" onClick={handleRandomize}>
            Randomize
          </button>
        )}

        <div className="result">{result}</div>
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
