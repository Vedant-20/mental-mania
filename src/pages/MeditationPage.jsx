import React, { useState } from 'react';

const MeditationPage = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(null);

  const meditationData = [
    {
      id: 1,
      title: 'Guided Meditation 1',
      duration: '10 minutes',
      audioUrl: 'path/to/audio1.mp3',
    },
    {
      id: 2,
      title: 'Guided Meditation 2',
      duration: '15 minutes',
      audioUrl: 'path/to/audio2.mp3',
    },
    // Add more meditation data objects as needed
  ];

  const handleMeditationSelection = (meditation) => {
    setSelectedMeditation(meditation);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meditation Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meditationData.map((meditation) => (
          <div
            key={meditation.id}
            className={`bg-white rounded-lg shadow p-4 ${
              selectedMeditation === meditation.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => handleMeditationSelection(meditation.id)}
          >
            <h2 className="text-lg font-bold mb-2">{meditation.title}</h2>
            <p className="text-gray-600 mb-2">{meditation.duration}</p>
          </div>
        ))}
      </div>
      {selectedMeditation && (
        <div className="mt-4">
          <p className="text-lg font-bold">
            Selected Meditation: {selectedMeditation.title}
          </p>
          <p className="text-gray-600">Duration: {selectedMeditation.duration}</p>
          <audio src={selectedMeditation.audioUrl} controls className="mt-4"></audio>
        </div>
      )}
    </div>
  );
};

export default MeditationPage;
