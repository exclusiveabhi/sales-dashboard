import React from 'react';
import { MoreHorizontal, Wallet, CreditCard } from 'lucide-react';

const PaymentGateways = () => {
  const payments = [
    {
      icon: 'https://www.paypalobjects.com/webstatic/icon/pp258.png',
      name: 'Paypal',
      description: 'Big Brands',
      amount: '+$6235'
    },
    {
      icon: Wallet,
      name: 'Wallet',
      description: 'Bill payment',
      amount: '-$235'
    },
    {
      icon: CreditCard,
      name: 'Credit card',
      description: 'Bill Payment',
      amount: '+$2235'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Payment Gateways</h3>
        <button className="text-gray-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="space-y-4">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
            <div className="flex items-center">
              {typeof payment.icon === 'string' ? (
                <img src={payment.icon} alt={payment.name} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {React.createElement(payment.icon, { size: 20 })}
                </div>
              )}
              <div className="ml-3">
                <div className="font-medium">{payment.name}</div>
                <div className="text-sm text-gray-500">{payment.description}</div>
              </div>
            </div>
            <div className={`font-medium ${payment.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {payment.amount}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-blue-600 py-2 hover:bg-blue-50 rounded-lg">
        View all transactions
      </button>
    </div>
  );
};

export default PaymentGateways;