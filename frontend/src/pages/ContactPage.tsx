import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'pricing', // Default to pricing
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        inquiryType: 'pricing',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-20 bg-bg-light min-h-screen flex flex-col">
      
      {/* Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-15" style={{ backgroundImage: 'url("/factory-floor.png")' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              تواصل معنا
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">تواصل معنا</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              نحن هنا لدعم مشروعك. فريق المبيعات والدعم الفني مستعد للإجابة على كافة استفساراتكم.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Content (Contact Info + Form) */}
      <section className="py-20 flex-grow">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Information Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/3 flex flex-col gap-6"
            >
              <h2 className="text-3xl font-black text-primary mb-2">بيانات الاتصال</h2>
              <p className="text-gray-500 font-medium mb-6">
                لا تتردد في الاتصال بنا في أي وقت أو زيارة مقر المصنع خلال أوقات العمل الرسمية.
              </p>

              {/* Info Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">الهاتف والواتساب</h3>
                  <p className="text-gray-600 mb-1" dir="ltr">+20 100 123 4567</p>
                  <p className="text-gray-600" dir="ltr">+20 111 987 6543</p>
                </div>
              </div>

              {/* Info Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                  <p className="text-gray-600 mb-1">sales@emad-panels.com</p>
                  <p className="text-gray-600">info@emad-panels.com</p>
                </div>
              </div>

              {/* Info Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">العنوان والمقر الرئيسي</h3>
                  <p className="text-gray-600 leading-relaxed">
                    المنطقة الصناعية الثالثة، مدينة العاشر من رمضان، جمهورية مصر العربية.
                  </p>
                </div>
              </div>

              {/* Info Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">أوقات العمل</h3>
                  <p className="text-gray-600 mb-1">من السبت إلى الخميس</p>
                  <p className="text-accent font-bold text-sm">08:00 صباحاً - 05:00 مساءً</p>
                </div>
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <h2 className="text-3xl font-black text-primary mb-8 relative z-10">أرسل لنا رسالة</h2>
                
                {isSuccess && (
                  <div className="mb-8 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 flex items-center gap-3 font-bold">
                    <FaCheckCircle className="text-xl" />
                    تم إرسال رسالتك بنجاح! سيتم التواصل معك في أقرب وقت.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">الاسم بالكامل <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-bold mb-2">اسم الشركة / المشروع</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white"
                        placeholder="أدخل اسم الشركة (اختياري)"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">رقم الجوال <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white text-right"
                        placeholder="+20 1X XXX XXXXX"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white text-right"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    {/* Inquiry Type */}
                    <label htmlFor="inquiryType" className="block text-gray-700 font-bold mb-2">نوع الاستفسار</label>
                    <div className="relative">
                      <select 
                        id="inquiryType" 
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white appearance-none pr-4 pl-10"
                      >
                        <option value="pricing">طلب عرض سعر لمنتجات</option>
                        <option value="custom_panel">طلب تصميم لوحة مخصصة</option>
                        <option value="maintenance">طلب صيانة أو دعم فني</option>
                        <option value="general">استفسار عام</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    {/* Message */}
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">الرسالة أو التفاصيل الفنية <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all outline-none bg-gray-50 focus:bg-white resize-y"
                      placeholder="اكتب تفاصيل مشروعك أو استفسارك هنا..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary hover:bg-accent text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane />
                        إرسال الرسالة
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full mt-auto">
        <iframe 
          title="Factory Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110531.06019747209!2d31.62266205!3d30.29744265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f642407d5711%3A0xc0cda778248c8dfa!2zMTB0aCBvZiBSYW1hZGFuIENpdHksIEFzaCBTaGFycWlhIEdvdmVybm9yYXRl!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
};

export default ContactPage;
