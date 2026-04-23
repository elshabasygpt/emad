import React from 'react';

const AdminPlaceholder: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
        <span className="text-3xl text-gray-400">⚙️</span>
      </div>
      <h2 className="text-2xl font-black text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500 text-center max-w-md">
        هذه الصفحة قيد التطوير حالياً. سيتم تفعيل خصائص إضافة وتعديل البيانات قريباً كجزء من لوحة التحكم المتكاملة.
      </p>
    </div>
  );
};

export default AdminPlaceholder;
