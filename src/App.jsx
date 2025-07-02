import React, { useState } from 'react';

const customDictionary = {
  teh: 'the',
  wrok: 'work',
  fot: 'for',
  exampl: 'example',
};

function App() {
  const [inputText, setInputText] = useState('');
  const [suggestedText, setSuggestedText] = useState('');

  /**
   * Handles changes in the textarea input.
   * Performs spell-checking and sets the first detected correction.
   * @param {Object} e - The event object from the textarea change.
   */
  
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(' ');
    let firstCorrection = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const correctedWord = customDictionary[word.toLowerCase()];
      if (correctedWord) {
        firstCorrection = correctedWord;
        break;
      }
    }

    setSuggestedText(firstCorrection);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
        className="p-5 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 transition duration-200 ease-in-out resize-none w-full max-w-lg"
      />
      {suggestedText && (
        <p className="mt-4 text-lg text-gray-700">
          Did you mean: <strong className="text-blue-600">{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
