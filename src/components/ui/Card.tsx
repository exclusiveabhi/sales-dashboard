import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  showMoreOptions?: boolean;
}

const Card = ({ title, children, showMoreOptions = true }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        {showMoreOptions && (
          <button className="text-gray-400">
            <MoreHorizontal size={20} />
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;