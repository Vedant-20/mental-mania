import React, { useState } from 'react';

const MoodTrackerPage = () => {
  const [selectedMood, setSelectedMood] = useState('');

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mood Tracker Page</h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-5 gap-4">
          <div
            className={`rounded-full w-12 h-12 bg-red-500 cursor-pointer ${
              selectedMood === 'sad' && 'ring ring-red-500'
            }`}
            onClick={() => handleMoodSelection('sad')}
          ></div>
          <div
            className={`rounded-full w-12 h-12 bg-yellow-500 cursor-pointer ${
              selectedMood === 'neutral' && 'ring ring-yellow-500'
            }`}
            onClick={() => handleMoodSelection('neutral')}
          ></div>
          <div
            className={`rounded-full w-12 h-12 bg-green-500 cursor-pointer ${
              selectedMood === 'happy' && 'ring ring-green-500'
            }`}
            onClick={() => handleMoodSelection('happy')}
          ></div>
          <div
            className={`rounded-full w-12 h-12 bg-blue-500 cursor-pointer ${
              selectedMood === 'excited' && 'ring ring-blue-500'
            }`}
            onClick={() => handleMoodSelection('excited')}
          ></div>
          <div
            className={`rounded-full w-12 h-12 bg-purple-500 cursor-pointer ${
              selectedMood === 'calm' && 'ring ring-purple-500'
            }`}
            onClick={() => handleMoodSelection('calm')}
          ></div>
        </div>
      </div>
      <div className="mt-4">
        {selectedMood && (
          <p className="text-center text-lg font-bold">
            You selected {selectedMood} as your current mood.
          </p>
        )}
      </div>
    </div>
  );
};

export default MoodTrackerPage;
