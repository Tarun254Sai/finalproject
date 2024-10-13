// src/SpecificVerse.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SpecificVerse = () => {
  const [verseData, setVerseData] = useState(null);
  const [book, setBook] = useState('John');
  const [chapter, setChapter] = useState('3');
  const [verse, setVerse] = useState('16');

  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch(`https://labs.bible.org/api/?passage=${book}%20${chapter}:${verse}&type=json`);
      const data = await response.json();
      setVerseData(data[0]);
    } catch (error) {
      console.error('Error fetching specific verse:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Specific Bible Verse</h2>
      <input 
        type="text" 
        placeholder="Book" 
        value={book}
        onChange={(e) => setBook(e.target.value)}
        style={{ marginRight: '5px', padding: '5px' }}
      />
      <input 
        type="number" 
        placeholder="Chapter" 
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
        style={{ marginRight: '5px', padding: '5px' }}
      />
      <input 
        type="number" 
        placeholder="Verse" 
        value={verse}
        onChange={(e) => setVerse(e.target.value)}
        style={{ padding: '5px' }}
      />
      <button onClick={fetchSpecificVerse} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
        Get Verse
      </button>
      {verseData && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>{verseData.bookname} {verseData.chapter}:{verseData.verse}</strong></p>
          <p>&quot;{verseData.text}&quot;</p>
        </div>
      )}
    </div>
  );
};

export default SpecificVerse;
