import React from 'react';

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <div>
      <div className="text-sm text-gray-500 px-4 py-2">{title}</div>
      {children}
    </div>
  );
};

export default NavSection;