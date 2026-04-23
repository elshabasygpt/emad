import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaPencilRuler, FaCogs, FaVial, FaWrench, FaArrowLeft } from 'react-icons/fa';

const services = [
  {
    id: 'design',
    title: 'التصميم والاستشارات الهندسية',
    icon: <FaPencilRuler />,
    desc: 'نقدم خدمات التصميم الهندسي المتكامل للوحات الكهربائية باستخدام أحدث البرامج الهندسية. نقوم بدراسة الأحمال، إعداد المخططات الأحادية (Single Line Diagrams)، واختيار المكونات الأنسب لتحقيق أقصى كفاءة وأمان لمشروعك.',
    image: '/engineer.png',
    features: ['رسم المخططات الكهربائية', 'دراسة وتحليل الأحمال', 'تقديم استشارات فنية متخصصة'],
  },
  {
    id: 'manufacturing',
    title: 'التصنيع والتجميع الميكانيكي',
    icon: <FaCogs />,
    desc: 'يتم تجميع اللوحات الكهربائية داخل مصنعنا المجهز بأحدث ماكينات القص والثني والـ CNC. نضمن الدقة المتناهية في التصنيع، مع استخدام أجود أنواع النحاس والصاج المعالج ضد العوامل الجوية لضمان عمر افتراضي طويل.',
    image: '/factory-floor.png',
    features: ['استخدام هياكل مجلفنة', 'طلاء إلكتروستاتيك مقاوم للصدأ', 'توزيع احترافي للبارات النحاسية'],
  },
  {
    id: 'testing',
    title: 'الاختبار والفحص الفني',
    icon: <FaVial />,
    desc: 'لا تخرج أي لوحة من مصنعنا دون المرور بمعمل الاختبارات الصارم. نقوم بإجراء كافة الفحوصات القياسية بما في ذلك اختبارات العزل (Megger)، والحقن الأولي والثانوي (Primary & Secondary Injection) لضمان موثوقية العمل في أقسى الظروف.',
    image: '/testing-engineer.png',
    features: ['اختبارات العزل الكهربائي', 'محاكاة ظروف التشغيل الحقيقية', 'إصدار شهادات فحص جودة معتمدة'],
  },
  {
    id: 'maintenance',
    title: 'الصيانة والدعم الفني',
    icon: <FaWrench />,
    desc: 'تستمر علاقتنا بعملائنا لما بعد البيع. نوفر فرق صيانة مدربة للتدخل السريع وإجراء الصيانة الدورية والوقائية للوحات في مواقع العمل، مما يضمن استمرارية الإنتاج دون توقفات مفاجئة وتجنب الخسائر.',
    image: '/electrical-panel.png',
    features: ['عقود صيانة سنوية', 'تدخل سريع للأعطال الطارئة', 'توفير قطع الغيار الأصلية'],
  },
];

const ServicesPage: React.FC = () => {
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
              خدماتنا الهندسية
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">الخدمات</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium"
            >
              من الفكرة إلى التشغيل... نقدم حلولاً هندسية متكاملة تضمن كفاءة واستقرار منشأتك.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Zig-Zag Sections */}
      <section className="py-12 bg-white">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={service.id} className={`py-16 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-6">
                <div className={`flex flex-col gap-12 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2 w-full"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute bottom-6 z-20 ${isEven ? 'right-6' : 'left-6'}`}>
                        <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                          <div className="w-12 h-12 bg-accent text-white flex items-center justify-center rounded-full text-2xl">
                            {service.icon}
                          </div>
                          <span className="text-primary font-black text-xl hidden sm:block">عماد الحلواني</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2 w-full flex flex-col justify-center"
                  >
                    <div className="inline-flex items-center gap-3 text-accent mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="font-bold text-lg tracking-widest uppercase">0{idx + 1}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium mb-8">
                      {service.desc}
                    </p>

                    <div className="space-y-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:border-accent/30 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-sm">✓</span>
                          </div>
                          <span className="text-gray-800 font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">مستعدون للبدء في مشروعك؟</h2>
          <p className="text-gray-300 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            فريقنا الهندسي جاهز لتقديم الدعم الفني واستقبال طلباتكم في أي وقت. اطلب استشارتك المجانية الآن.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg flex items-center justify-center gap-3 transform hover:-translate-y-1 w-full sm:w-auto">
              اطلب عرض سعر
              <FaArrowLeft />
            </Link>
            <Link to="/products" className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg flex items-center justify-center w-full sm:w-auto">
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
