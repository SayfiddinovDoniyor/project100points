import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './CarComponents/Headr';  
import Car from './CarComponents/Car';          
import AddCar from './CarComponents/AddCar';    
import { initialCars, additionalCars } from './CarSample';  

const RandomizerApp = () => {
  const [mode, setMode] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [names, setNames] = useState('');
  const [result, setResult] = useState('');
  const [cars, setCars] = useState(initialCars);  
  const [richNewsIndex, setRichNewsIndex] = useState(0);

  const generateRandomName = () => {
    const syllables = [
      "ab", "ul", "lo", "di", "yor", "bek", "an", "or", "no", "za", "sha", "ra",
      "mi", "la", "zo", "ka", "na", "ur", "to", "mu", "li", "ro", "ta", "ga", "xon", "jon"
    ];
    const length = Math.floor(Math.random() * 3) + 2;
    let name = '';
    for (let i = 0; i < length; i++) {
      name += syllables[Math.floor(Math.random() * syllables.length)];
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const richNews = [
    {
      title: "Random Name Generator Added!",
      description: "You can now create fun, made-up names with our new feature.",
      image: "https://via.placeholder.com/500x250?text=Random+Name+Generator",
      type: "image",
    },
    {
      title: "Video Demo of Number Randomizer",
      description: "Watch how easy it is to get random numbers.",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "video",
    },
    {
      title: "Sleek New UI",
      description: "We’ve redesigned the site to be more modern and colorful.",
      image: "https://via.placeholder.com/500x250?text=New+UI+Design",
      type: "image",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRichNewsIndex((prev) => (prev + 1) % richNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
    } else if (mode === 'uzbek') {
      const randomName = generateRandomName();
      setResult(`Your baby's name is ${randomName}`);
    }
  };

  const loadAdditionalCars = () => {
    setCars(prevCars => ({ ...prevCars, ...additionalCars }));
  };

  const addCarToGallery = (car) => {
    const newCar = { ['car' + Date.now()]: car };
    setCars(prevCars => ({ ...prevCars, ...newCar }));
  };

  return (
    <div className="app">
      <Header text="Vehicle Quick Info" />

      <p className="App-intro">Some information about popular SUV and Crossover models.</p>

      <div className="cars">
        {Object.keys(cars).map(key => <Car key={key} meta={cars[key]} />)}
      </div>

      <div className="add-cars"><button onClick={loadAdditionalCars}>Load more...</button></div>
      <AddCar addCar={addCarToGallery} />

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

      <div className="news-carousel">
        {richNews.map((item, index) => (
          <div className="news-card" key={index}>
            {item.type === "image" ? (
              <img src={item.image} alt="News" className="news-card-image" />
            ) : (
              <video controls className="news-card-video">
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="news-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

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
    <RandomizerApp />
  </React.StrictMode>
);
