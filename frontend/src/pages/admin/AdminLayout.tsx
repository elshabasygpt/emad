import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUsers, FaCertificate, FaCog, FaSignOutAlt, FaEnvelope, FaFileInvoiceDollar, FaBars } from 'react-icons/fa';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'الرئيسية (الإحصائيات)', path: '/admin/dashboard', icon: <FaHome /> },
    { name: 'إدارة المشاريع', path: '/admin/projects', icon: <FaProjectDiagram /> },
    { name: 'إدارة العملاء', path: '/admin/clients', icon: <FaUsers /> },
    { name: 'إدارة الشهادات', path: '/admin/certificates', icon: <FaCertificate /> },
    { name: 'رسائل التواصل', path: '/admin/messages', icon: <FaEnvelope /> },
    { name: 'طلبات عروض السعر', path: '/admin/quotes', icon: <FaFileInvoiceDollar /> },
    { name: 'إعدادات الموقع', path: '/admin/settings', icon: <FaCog /> },
  ];

  return (
    <div className="flex h-screen bg-bg-light overflow-hidden" dir="rtl">
      
      {/* Sidebar */}
      <aside className={`bg-primary text-white w-64 flex-shrink-0 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full absolute'} md:relative md:translate-x-0 z-20 shadow-2xl`}>
        <div className="p-6 flex items-center justify-center border-b border-white/10">
          <div className="flex flex-col items-center">
            <span className="text-xl font-black tracking-tight text-white mb-1">عماد الحلواني</span>
            <span className="text-xs text-accent font-bold">لوحة التحكم (Admin)</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold ${
                      isActive 
                        ? 'bg-accent text-white shadow-lg' 
                        : 'text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-bold"
          >
            <FaSignOutAlt className="text-lg" />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        {/* Topbar */}
        <header className="bg-white h-20 px-6 border-b border-gray-100 flex items-center justify-between shadow-sm flex-shrink-0">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors md:hidden"
            >
              <FaBars className="text-xl" />
            </button>
            <h1 className="text-2xl font-black text-primary hidden sm:block">
              {navItems.find(item => item.path === location.pathname)?.name || 'لوحة التحكم'}
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
              م
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-800">المدير العام</p>
              <p className="text-xs text-gray-500">متصل الآن</p>
            </div>
          </div>
        </header>

        {/* Dashboard Pages Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;
