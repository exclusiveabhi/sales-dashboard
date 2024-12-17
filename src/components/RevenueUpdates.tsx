import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const RevenueUpdates = () => {
  const data = [30, 40, 35, 50, 49, 60, 70, 91, 125];

  const maxValue = Math.max(...data);
  const getHeight = (value: number) => (value / maxValue) * 100;

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Revenue Updates</h3>
        <button className="text-gray-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="flex items-end space-x-2 h-40">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1"
          >
            <div
              className="bg-blue-600 rounded-t"
              style={{ height: `${getHeight(value)}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueUpdates;