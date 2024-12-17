import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon: Icon, label, isActive }: NavItemProps) => {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${
        isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </a>
  );
};

export default NavItem;