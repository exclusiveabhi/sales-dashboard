import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const YearlySales = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Yearly Sales</h3>
        <button className="text-gray-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="h-40 relative">
        
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          <path
            d="M0,50 C100,30 200,70 300,50"
            fill="none"
            stroke="#E0E7FF"
            strokeWidth="2"
          />
          <path
            d="M0,50 C100,30 200,70 300,50"
            fill="none"
            stroke="#4F46E5"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
            <span>$5476</span>
          </div>
          <div className="text-sm text-gray-500">2023</div>
        </div>
        <div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
            <span>$4476</span>
          </div>
          <div className="text-sm text-gray-500">2022</div>
        </div>
      </div>
    </div>
  );
};

export default YearlySales;