import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Education />
    </div>
  );
}

export default App;
