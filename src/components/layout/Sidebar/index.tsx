import React from 'react';
import { 
  ShoppingCart,
  Users,
  MessageCircle,
  Calendar,
  Mail,
  Ticket,
} from 'lucide-react';
import NavItem from './NavItem';
import NavSection from './NavSection';
import UserProfile from './UserProfile';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 flex flex-col min-h-screen">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
        <span className="text-xl font-semibold">Catalog</span>
      </div>

      <nav className="space-y-6 flex-1">
        <NavSection title="HOME">
          <NavItem icon={ShoppingCart} label="eCommerce" isActive />
        </NavSection>
        
        <NavSection title="APP">
          <div className="space-y-1">
            <NavItem icon={Users} label="Contacts" />
            <NavItem icon={MessageCircle} label="Chats" />
            <NavItem icon={Calendar} label="Calendar" />
            <NavItem icon={Mail} label="Email" />
            <NavItem icon={Ticket} label="Tickets" />
          </div>
        </NavSection>
      </nav>

      <UserProfile />
    </div>
  );
};

export default Sidebar;