import React from 'react';

const SupportGroups = () => {
  const supportGroupsData = [
    {
      id: 1,
      name: 'Anxiety Support Group',
      location: 'Virtual',
      schedule: 'Every Tuesday, 7-8 PM',
    },
    {
      id: 2,
      name: 'Depression Support Group',
      location: 'Local Community Center',
      schedule: 'Every Thursday, 6-7 PM',
    },
    // Add more support group data objects as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Support Groups</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {supportGroupsData.map((group) => (
          <div key={group.id} className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-2">{group.name}</h2>
            <p className="text-gray-600 mb-2">
              Location: {group.location}
            </p>
            <p className="text-gray-600 mb-2">
              Schedule: {group.schedule}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Join Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportGroups;
