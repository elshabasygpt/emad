import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAward, FaCheckCircle, FaLeaf, FaShieldAlt, FaArrowLeft, FaFileContract } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    title: 'ISO 9001:2015',
    desc: 'شهادة نظام إدارة الجودة، تؤكد التزامنا بأعلى معايير التصنيع والإدارة العالمية.',
    image: '/certificate_placeholder_1776907513125.png',
  },
  {
    id: 2,
    title: 'ISO 14001:2015',
    desc: 'شهادة نظام إدارة البيئة، تعكس حرصنا على استخدام عمليات تصنيع صديقة للبيئة ومستدامة.',
    image: '/certificate_placeholder_1776907513125.png',
  },
  {
    id: 3,
    title: 'ISO 45001:2018',
    desc: 'شهادة إدارة الصحة والسلامة المهنية، لضمان بيئة عمل آمنة لجميع مهندسينا وفنيينا.',
    image: '/certificate_placeholder_1776907513125.png',
  },
  {
    id: 4,
    title: 'Type Test Certificates',
    desc: 'شهادات اختبار نوعية من معامل معتمدة دولياً (مثل KEMA/ASTA) للوحات التوزيع الرئيسية.',
    image: '/certificate_placeholder_1776907513125.png',
  },
];

const policies = [
  {
    title: 'التحسين المستمر',
    icon: <FaAward />,
    desc: 'نسعى دائماً لتطوير قدراتنا التصنيعية وتدريب كوادرنا لضمان تقديم أحدث الحلول وأعلاها كفاءة.',
  },
  {
    title: 'مطابقة المواصفات',
    icon: <FaCheckCircle />,
    desc: 'نلتزم بالتصنيع وفقاً للمواصفات القياسية العالمية (IEC) لضمان أعلى درجات الأمان.',
  },
  {
    title: 'الاستدامة البيئية',
    icon: <FaLeaf />,
    desc: 'نطبق سياسات صارمة لتقليل المخلفات الصناعية وإعادة تدوير المواد غير المستخدمة.',
  },
  {
    title: 'الأمن والسلامة',
    icon: <FaShieldAlt />,
    desc: 'نوفر بيئة عمل آمنة، ونطبق إجراءات صارمة للوقاية من الحوادث المهنية وتأمين المنشآت.',
  },
];

const CertificatesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-15" style={{ backgroundImage: 'url("/factory-floor.png")' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              الشهادات والاعتمادات
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">الشهادات</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              الجودة ليست مجرد شعار، بل هي منهج عمل موثق بشهادات عالمية تضمن تقديم الأفضل دائماً لعملائنا.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">شهادات دولية نعتز بها</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
              تتويجاً لجهودنا في الحفاظ على أعلى مستويات الجودة والأمان في كافة مراحل التصنيع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(11,42,69,0.1)] transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="p-6 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors z-0"></div>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain relative z-10 drop-shadow-md transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{cert.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 relative inline-block">
                سياسة الجودة والسلامة
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-accent rounded-full"></span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-white/10 text-accent flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {policy.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{policy.title}</h3>
                    <p className="text-gray-300 font-medium leading-relaxed">
                      {policy.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-bg-light border-t border-gray-200 text-center">
        <div className="container mx-auto px-6">
          <FaFileContract className="text-6xl text-primary mx-auto mb-6 opacity-30" />
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">اعتمد على الجودة التي تستحقها</h2>
          <p className="text-gray-600 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            دعنا نشارك في إنجاح مشروعك القادم من خلال توريد لوحات كهربائية معتمدة ومطابقة لأعلى المواصفات القياسية.
          </p>
          <Link to="/contact" className="bg-primary hover:bg-accent text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg inline-flex items-center gap-3 transform hover:-translate-y-1">
            اطلب عرض سعر الآن
            <FaArrowLeft />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CertificatesPage;
