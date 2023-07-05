import React, { useState } from 'react';

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('');

  const handleInputChange = (e) => {
    setJournalEntry(e.target.value);
  };

  const handleSaveEntry = () => {
    // Implement your save entry logic here
    console.log('Saving journal entry:', journalEntry);
    setJournalEntry('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Journal</h1>
      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded"
        placeholder="Write your journal entry..."
        value={journalEntry}
        onChange={handleInputChange}
      ></textarea>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleSaveEntry}
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default Journal;
