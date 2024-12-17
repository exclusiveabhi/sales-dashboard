import React from 'react';
import { Bell, Settings } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;