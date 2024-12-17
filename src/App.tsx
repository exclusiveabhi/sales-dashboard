import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import SalesDistribution from './components/SalesDistribution';
import SalesOverview from './components/SalesOverview';
import RevenueUpdates from './components/RevenueUpdates';
import YearlySales from './components/YearlySales';
import ActiveUsers from './components/ActiveUsers';
import PaymentGateways from './components/PaymentGateways';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <Header />
        
        <SalesDistribution />

        <div className="grid grid-cols-3 gap-6 mt-6">
          <SalesOverview />
          <RevenueUpdates />
          <YearlySales />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <ActiveUsers />
          <PaymentGateways />
        </div>
      </div>
    </div>
  );
}

export default App;