import React from 'react';

const Meditation = () => {
  const meditationData = [
    {
      id: 1,
      title: 'Guided Meditation 1',
      duration: '10 minutes',
      imageUrl: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Guided Meditation 2',
      duration: '15 minutes',
      imageUrl: 'https://media.istockphoto.com/id/1494995667/photo/young-man-meditating-on-rocks-at-lakeshore-during-vacation.webp?b=1&s=170667a&w=0&k=20&c=_LFsAX6_b9wjaqonAnbuErR-3UFLYrXL9EHmXIJUmJU=',
    },
    // Add more meditation data objects as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Guided Meditations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {meditationData.map((meditation) => (
          <div key={meditation.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={meditation.imageUrl}
              alt={meditation.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{meditation.title}</h2>
            <p className="text-gray-600 mb-2">{meditation.duration}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Start Meditation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
