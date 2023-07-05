import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white text-lg font-bold">Mental Health Support</a>
          </div>
          <div className="flex items-center">
            <a href="/meditation" className="text-white mx-4 hover:text-gray-200">Meditation</a>
            <a href="/mood-tracker" className="text-white mx-4 hover:text-gray-200">Mood Tracker</a>
            <a href="/journal" className="text-white mx-4 hover:text-gray-200">Journal</a>
            <a href="/professionals" className="text-white mx-4 hover:text-gray-200">Professionals</a>
            <a href="/support-groups" className="text-white mx-4 hover:text-gray-200">Support Groups</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
