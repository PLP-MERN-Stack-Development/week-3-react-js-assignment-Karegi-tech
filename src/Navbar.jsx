import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">PLP Task Manager</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Tasks</a>
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">API</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
