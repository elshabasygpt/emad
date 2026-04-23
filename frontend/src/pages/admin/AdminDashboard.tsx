import React from 'react';
import { FaProjectDiagram, FaUsers, FaEnvelope, FaFileInvoiceDollar } from 'react-icons/fa';

const AdminDashboard: React.FC = () => {
  const stats = [
    { title: 'إجمالي المشاريع', count: 12, icon: <FaProjectDiagram />, color: 'bg-blue-500' },
    { title: 'العملاء', count: 24, icon: <FaUsers />, color: 'bg-green-500' },
    { title: 'رسائل تواصل', count: 5, icon: <FaEnvelope />, color: 'bg-purple-500' },
    { title: 'طلبات عروض السعر', count: 3, icon: <FaFileInvoiceDollar />, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-14 h-14 ${stat.color} text-white rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 font-bold text-sm mb-1">{stat.title}</p>
              <h3 className="text-3xl font-black text-gray-900">{stat.count}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-primary mb-4 border-b pb-4">أحدث طلبات عروض الأسعار</h2>
          <div className="flex flex-col gap-4">
            {/* Placeholder for table */}
            <div className="p-4 bg-gray-50 rounded-xl text-center text-gray-500">
              لا توجد طلبات جديدة حالياً.
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-primary mb-4 border-b pb-4">أحدث رسائل التواصل</h2>
          <div className="flex flex-col gap-4">
            {/* Placeholder for table */}
            <div className="p-4 bg-gray-50 rounded-xl text-center text-gray-500">
              لا توجد رسائل جديدة حالياً.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
