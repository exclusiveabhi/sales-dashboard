import React from 'react';
import { Download } from 'lucide-react';

const ActiveUsers = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Active User</h3>
          <div className="text-blue-600 text-sm">
            8.06% <span className="text-gray-500">Vs. previous month</span>
          </div>
        </div>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <Download size={20} className="mr-2" />
          Export
        </button>
      </div>

      <div className="relative h-64">
        <img
          src="https://raw.githubusercontent.com/lipis/flag-icons/main/assets/docs/img/world.svg"
          alt="World Map"
          className="w-full h-full object-contain opacity-20"
        />
        
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-600 rounded-full"></div>
      </div>

      <div className="text-center mt-4">
        <div className="text-2xl font-bold">23,214</div>
        <div className="text-gray-500">Total Active User</div>
      </div>
    </div>
  );
};

export default ActiveUsers;