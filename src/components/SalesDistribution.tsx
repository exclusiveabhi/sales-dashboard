import React from 'react';

const SalesDistribution = () => {
  const stats = [
    { amount: '$34,343.00', label: 'Total Sales' },
    { amount: '$4.5k', percentage: '40%', label: 'By Website' },
    { amount: '$2.8k', percentage: '25%', label: 'By Mobile' },
    { amount: '$2.2k', percentage: '20%', label: 'By Market' },
    { amount: '$1.7k', percentage: '15%', label: 'By Agent' },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Sales Distribution</h2>
        <p className="text-gray-500 text-sm">This is all over Platform Sales Generated</p>
      </div>
      <div className="flex justify-between items-start">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`flex flex-col space-y-2 ${
              index === 0 ? 'pr-8' : 'px-8'
            } ${
              index !== stats.length - 1 ? 'border-r border-blue-200' : ''
            }`}
          >
            <div className="text-2xl font-bold">{stat.amount}</div>
            {stat.percentage && (
              <div className="text-gray-500">({stat.percentage})</div>
            )}
            <div className="text-gray-500 text-sm mt-auto">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesDistribution;