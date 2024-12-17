import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 bg-gray-100 rounded-lg w-64 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;