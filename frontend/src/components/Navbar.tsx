import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaBars, FaTimes, FaFileAlt, FaBolt,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaLinkedinIn, FaYoutube, FaFacebookF
} from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('الرئيسية');
  const location = useLocation();

  const [settings, setSettings] = useState({
    email1: 'info@emad-panels.com',
    phone1: '0100 123 4567',
    address: 'المنوفية - شبين الكوم',
    facebook: '#',
    youtube: '#',
    linkedin: '#'
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch settings from API
    fetch('http://localhost:5000/api/settings')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSettings({
            email1: data.email1 || 'info@emad-panels.com',
            phone1: data.phone1 || '0100 123 4567',
            address: data.address || 'المنوفية - شبين الكوم',
            facebook: data.facebook || '#',
            youtube: data.youtube || '#',
            linkedin: data.linkedin || '#'
          });
        }
      })
      .catch(err => console.error('Error fetching settings:', err));
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'المنتجات', path: '/products' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المشاريع', path: '/projects' },
    { name: 'العملاء', path: '/clients' },
    { name: 'الشهادات', path: '/certificates' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div 
        className={`bg-primary w-full text-white text-sm transition-all duration-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-auto py-2 opacity-100'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
            <div className="flex items-center gap-2">
              <span dir="ltr">{settings.email1}</span>
              <FaEnvelope className="text-accent text-lg" />
            </div>
            <span className="text-gray-500 hidden md:inline">|</span>
            <div className="flex items-center gap-2">
              <span dir="ltr" className="font-bold">{settings.phone1}</span>
              <FaPhoneAlt className="text-accent text-lg" />
            </div>
            <span className="text-gray-500 hidden md:inline">|</span>
            <div className="flex items-center gap-2">
              <span>{settings.address}</span>
              <FaMapMarkerAlt className="text-accent text-lg" />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-300">
            {settings.facebook && settings.facebook !== '#' && <a href={settings.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaFacebookF /></a>}
            {settings.youtube && settings.youtube !== '#' && <a href={settings.youtube} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaYoutube /></a>}
            {settings.linkedin && settings.linkedin !== '#' && <a href={settings.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn /></a>}
            {/* Show defaults if all are empty */}
            {(!settings.facebook || settings.facebook === '#') && (!settings.youtube || settings.youtube === '#') && (!settings.linkedin || settings.linkedin === '#') && (
               <>
                 <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
                 <a href="#" className="hover:text-white transition-colors"><FaYoutube /></a>
                 <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
               </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'py-4 shadow-md' : 'py-6 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-[2.5px] border-primary shadow-sm bg-gray-50 group hover:shadow-md transition-shadow">
                <FaBolt className="text-accent text-3xl absolute" style={{ transform: 'translateX(-2px)' }} />
                <FaBolt className="text-primary text-3xl absolute" style={{ transform: 'translateX(2px)' }} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-3xl font-black tracking-tight leading-none mb-1.5">
                  عماد الحلواني
                </span>
                <span className="text-gray-500 text-base font-bold leading-none tracking-wide">
                  للوحات الكهربائية
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex gap-8">
              {navLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setActiveLink(link.name)}
                    className={`font-bold text-lg pb-2.5 transition-all duration-300 relative ${
                      activeLink === link.name || location.pathname === link.path
                        ? 'text-accent' 
                        : 'text-primary hover:text-accent'
                    }`}
                  >
                    {link.name}
                    {/* Animated Underline */}
                    <span 
                      className={`absolute bottom-0 right-0 h-[3px] bg-accent transition-all duration-300 rounded-t-sm ${
                        activeLink === link.name || location.pathname === link.path ? 'w-full' : 'w-0'
                      }`}
                    ></span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <Link to="/quote">
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="btn-primary py-3 px-8 text-base flex items-center gap-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <FaFileAlt className="text-xl" />
                طلب عرض سعر
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden text-primary cursor-pointer p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-white absolute w-full top-full left-0 py-4 px-6 flex flex-col gap-4 border-b border-gray-100 shadow-xl"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block font-bold text-lg ${
                      activeLink === link.name || location.pathname === link.path ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="btn-primary w-full py-3 text-lg mt-4 flex items-center justify-center gap-2">
                <FaFileAlt />
                طلب عرض سعر
              </button>
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
