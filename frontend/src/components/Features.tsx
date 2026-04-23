import React from 'react';
import { motion } from 'framer-motion';
import { FaDraftingCompass, FaCogs, FaClipboardCheck, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'التصميم الهندسي',
    desc: 'تصميم لوحات كهربائية متطورة وفقاً للمواصفات العالمية وبما يتناسب مع متطلبات الأحمال لضمان الكفاءة والأمان.',
    icon: <FaDraftingCompass />,
  },
  {
    title: 'التصنيع والتجميع',
    desc: 'تجميع اللوحات بدقة عالية باستخدام مكونات من أفضل الماركات العالمية (ABB, Schneider) داخل مصنعنا المجهز بالكامل.',
    icon: <FaCogs />,
  },
  {
    title: 'الفحص والاختبار',
    desc: 'إجراء كافة الاختبارات القياسية (Testing & Commissioning) قبل التوريد لضمان الجاهزية التامة للعمل في أقسى الظروف.',
    icon: <FaClipboardCheck />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="الخدمات" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 relative inline-block">
              خدماتنا
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto font-medium">
              نقدم حلولاً متكاملة تبدأ من دراسة المشروع وتصميمه، مروراً بالتصنيع، وحتى الاختبارات النهائية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-bg-light rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(11,42,69,0.08)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Decorative accent blob on hover */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white text-accent text-3xl rounded-xl flex items-center justify-center shadow-md mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  {service.desc}
                </p>
                <button className="flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <FaArrowLeft />
                  </span>
                  <span>اطلب الخدمة</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
            <Link to="/services" className="btn-primary inline-flex px-10 py-4 text-lg shadow-lg hover:shadow-xl items-center justify-center gap-3 mx-auto">
              استكشف كافة خدماتنا
              <FaArrowLeft className="text-sm" />
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
