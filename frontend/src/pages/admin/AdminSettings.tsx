import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSave, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    email1: '',
    phone1: '',
    address: '',
    facebook: '',
    youtube: '',
    linkedin: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/settings');
      if (res.data) {
        setSettings({
          email1: res.data.email1 || '',
          phone1: res.data.phone1 || '',
          address: res.data.address || '',
          facebook: res.data.facebook || '',
          youtube: res.data.youtube || '',
          linkedin: res.data.linkedin || ''
        });
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccess(false);
    setError('');

    const token = localStorage.getItem('adminToken');
    
    // Fallback logic for ui testing
    if (token === 'simulated_token_for_ui_dev') {
      setTimeout(() => {
        setIsSaving(false);
        setSuccess(true);
      }, 1000);
      return;
    }

    try {
      await axios.put('http://localhost:5000/api/admin/settings', settings, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess(true);
    } catch (err) {
      setError('فشل حفظ الإعدادات. يرجى المحاولة لاحقاً.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64"><FaSpinner className="animate-spin text-3xl text-primary" /></div>;
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b pb-6 mb-8">
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">إعدادات الموقع</h2>
          <p className="text-gray-500 text-sm">تحكم في الشريط العلوي وروابط التواصل الاجتماعي</p>
        </div>
      </div>

      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 flex items-center gap-3 border border-green-200">
          <FaCheckCircle className="text-xl" />
          <span className="font-bold">تم حفظ الإعدادات بنجاح! ستظهر التعديلات على الموقع مباشرة.</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6 font-bold border border-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-4 border-r-4 border-accent pr-3 bg-gray-50 p-2 rounded-l-lg">بيانات التواصل (الشريط العلوي)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
              <input 
                type="text" 
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-right bg-gray-50 focus:bg-white transition-colors"
                value={settings.phone1}
                onChange={(e) => setSettings({...settings, phone1: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
              <input 
                type="email" 
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-right bg-gray-50 focus:bg-white transition-colors"
                value={settings.email1}
                onChange={(e) => setSettings({...settings, email1: e.target.value})}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">العنوان</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-gray-50 focus:bg-white transition-colors"
                value={settings.address}
                onChange={(e) => setSettings({...settings, address: e.target.value})}
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-4 border-r-4 border-accent pr-3 bg-gray-50 p-2 rounded-l-lg">روابط التواصل الاجتماعي</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">فيسبوك (Facebook)</label>
              <input 
                type="url" 
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-left bg-gray-50 focus:bg-white transition-colors"
                value={settings.facebook}
                onChange={(e) => setSettings({...settings, facebook: e.target.value})}
                placeholder="https://facebook.com/..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">لينكد إن (LinkedIn)</label>
              <input 
                type="url" 
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-left bg-gray-50 focus:bg-white transition-colors"
                value={settings.linkedin}
                onChange={(e) => setSettings({...settings, linkedin: e.target.value})}
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">يوتيوب (YouTube)</label>
              <input 
                type="url" 
                dir="ltr"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-left bg-gray-50 focus:bg-white transition-colors"
                value={settings.youtube}
                onChange={(e) => setSettings({...settings, youtube: e.target.value})}
                placeholder="https://youtube.com/..."
              />
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={isSaving}
            className="bg-primary hover:bg-accent text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSaving ? <FaSpinner className="animate-spin" /> : <FaSave />}
            {isSaving ? 'جاري الحفظ...' : 'حفظ التعديلات'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
