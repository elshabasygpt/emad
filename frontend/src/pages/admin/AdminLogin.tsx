import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaLock, FaEnvelope, FaBolt } from 'react-icons/fa';
import axios from 'axios';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Temporary: Wait for full backend integration. For now, simulate.
      // In real code: const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
      
      // Let's assume we use standard URL, if it fails, fallback to hardcoded auth for UI testing.
      try {
        const res = await axios.post('http://localhost:5000/api/admin/login', { email, password });
        localStorage.setItem('adminToken', res.data.token);
        navigate('/admin/dashboard');
      } catch (err: any) {
        if(email === 'admin@emad-panels.com' && password === 'admin123456') {
          localStorage.setItem('adminToken', 'simulated_token_for_ui_dev');
          navigate('/admin/dashboard');
        } else {
          setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
        }
      }
    } catch (err) {
      setError('حدث خطأ في الاتصال بالخادم.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center px-6">
      <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] w-full max-w-md relative overflow-hidden">
        {/* Decorative blob */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col items-center mb-10 relative z-10">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
            <FaBolt />
          </div>
          <h1 className="text-2xl font-black text-primary">تسجيل دخول الإدارة</h1>
          <p className="text-gray-500 mt-2 text-sm">لوحة تحكم عماد الحلواني للوحات الكهربائية</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold mb-6 text-center border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="relative z-10 flex flex-col gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none pl-12 text-right bg-gray-50 focus:bg-white transition-colors"
                placeholder="admin@emad-panels.com"
              />
              <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">كلمة المرور</label>
            <div className="relative">
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none pl-12 text-right bg-gray-50 focus:bg-white transition-colors"
                placeholder="••••••••"
              />
              <FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? 'جاري التحقق...' : 'دخول للوحة التحكم'}
          </button>
        </form>
        
        <p className="text-center text-xs text-gray-400 mt-8">
          هذه الصفحة مخصصة فقط لمديري النظام. للعودة للموقع <Link to="/" className="text-accent hover:underline">اضغط هنا</Link>.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
