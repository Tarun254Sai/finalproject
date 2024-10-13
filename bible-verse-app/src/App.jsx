import React from 'react';
import RandomVerse from './RandomVerse';
import SpecificVerse from './SpecificVerse';
import './App.css'; // You can keep this if you want to use your CSS styles.

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Bible Verse Fetcher</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
};

export default App;
