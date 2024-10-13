// src/RandomVerse.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const RandomVerse = () => {
  const [verse, setVerse] = useState(null);
  
  const fetchRandomVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
      const data = await response.json();
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching random verse:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Random Bible Verse</h2>
      <button onClick={fetchRandomVerse} style={{ padding: '10px', fontSize: '16px' }}>
        Get Random Verse
      </button>
      {verse && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>{verse.bookname} {verse.chapter}:{verse.verse}</strong></p>
          <p>&quot;{verse.text}&quot;</p>
        </div>
      )}
    </div>
  );
};

export default RandomVerse;
