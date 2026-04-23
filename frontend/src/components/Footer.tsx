import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBolt, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [settings, setSettings] = useState({
    email1: 'info@emad-panels.com',
    phone1: '+20 100 123 4567',
    address: 'المنطقة الصناعية الثالثة، مدينة العاشر من رمضان',
    facebook: '#',
    youtube: '#',
    linkedin: '#'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings(prev => ({
            ...prev,
            email1: data.email1 || prev.email1,
            phone1: data.phone1 || prev.phone1,
            address: data.address || prev.address,
            facebook: data.facebook || prev.facebook,
            youtube: data.youtube || prev.youtube,
            linkedin: data.linkedin || prev.linkedin
          }));
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <footer className="bg-primary text-gray-300 pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
                <FaBolt className="text-accent text-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-black leading-none">عماد الحلواني</span>
                <span className="text-gray-400 text-sm font-bold">للوحات الكهربائية</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 font-medium text-gray-400">
              شريكك الموثوق في تقديم حلول الطاقة المتكاملة. متخصصون في تصميم وتصنيع اللوحات الكهربائية بأعلى معايير الجودة العالمية لتلبية كافة احتياجات القطاع الصناعي والتجاري.
            </p>
            <div className="flex gap-3">
              {settings.facebook !== '#' && (
                <a href={settings.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
              )}
              {settings.linkedin !== '#' && (
                <a href={settings.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <FaLinkedinIn />
                </a>
              )}
              {settings.youtube !== '#' && (
                <a href={settings.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-3 font-medium">
              <li><a href="#الرئيسية" className="hover:text-accent transition-colors block">الرئيسية</a></li>
              <li><a href="#من نحن" className="hover:text-accent transition-colors block">عن المصنع</a></li>
              <li><a href="#المنتجات" className="hover:text-accent transition-colors block">المنتجات (MDB, SMDB)</a></li>
              <li><a href="#المشاريع" className="hover:text-accent transition-colors block">سابقة الأعمال</a></li>
              <li><a href="#الشهادات" className="hover:text-accent transition-colors block">الشهادات والاعتمادات</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-medium text-sm">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-accent text-lg flex-shrink-0 mt-1" />
                <span>{settings.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-accent flex-shrink-0" />
                <span dir="ltr">{settings.phone1}</span>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <span dir="ltr">{settings.email1}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / CTA */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
              النشرة البريدية
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <p className="text-sm font-medium text-gray-400 mb-4">
              اشترك في نشرتنا ليصلك أحدث مشاريعنا وعروضنا الحصرية في مجال اللوحات الكهربائية.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="البريد الإلكتروني..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent w-full text-sm"
              />
              <button type="button" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-4 rounded-lg transition-colors w-full">
                اشتراك
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <p>&copy; {new Date().getFullYear()} عماد الحلواني للوحات الكهربائية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
