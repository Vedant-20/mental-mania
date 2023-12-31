import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Mental Health Support Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
