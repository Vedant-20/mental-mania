import React from 'react';

const Professionals = () => {
  const professionalsData = [
    {
      id: 1,
      name: 'Dr. Jane Smith',
      profession: 'Psychiatrist',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoZXJhcGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      name: 'Dr. John Doe',
      profession: 'Therapist',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRoZXJhcGlzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    // Add more professional data objects as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mental Health Professionals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {professionalsData.map((professional) => (
          <div key={professional.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={professional.imageUrl}
              alt={professional.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{professional.name}</h2>
            <p className="text-gray-600 mb-2">{professional.profession}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
