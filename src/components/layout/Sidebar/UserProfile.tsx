import React from 'react';
import { Settings, LogOut } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="border-t border-gray-100 pt-4 mt-auto">
      <div className="flex items-center space-x-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />
        <div>
          <div className="font-medium">Jane Cooper</div>
          <div className="text-sm text-gray-500">Admin</div>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings size={20} />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;