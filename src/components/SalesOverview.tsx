import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const SalesOverview = () => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Sales Overview</h3>
        <button className="text-gray-400">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      <div className="flex justify-center">
        <div className="relative w-40 h-40">
          <svg className="transform -rotate-90 w-40 h-40">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#E5E7EB"
              strokeWidth="20"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#4F46E5"
              strokeWidth="20"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="110"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-2xl font-bold">$500,00</div>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
            <span>$23,450</span>
          </div>
          <span className="text-gray-500">Profit</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-cyan-400 mr-2"></div>
            <span>$23,450</span>
          </div>
          <span className="text-gray-500">Expense</span>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;