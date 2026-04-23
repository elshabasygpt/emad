import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaHandshake, FaLightbulb, FaClock, FaShieldAlt, FaEye, FaBullseye, FaCheckCircle, FaIndustry, FaCogs, FaUsers, FaBriefcase, FaAward } from 'react-icons/fa';

const stats = [
  { value: '250+', label: 'عميل', icon: <FaUsers /> },
  { value: '500+', label: 'مشروع مكتمل', icon: <FaBriefcase /> },
  { value: '15+', label: 'سنة خبرة', icon: <FaAward /> },
  { value: '100%', label: 'رضا العملاء', icon: <FaShieldAlt /> },
];

const values = [
  { title: 'الشراكة', desc: 'نؤمن ببناء علاقات طويلة الأمد مع عملائنا وشركائنا.', icon: <FaHandshake /> },
  { title: 'الابتكار', desc: 'نستخدم أحدث التقنيات لتقديم أفضل الحلول.', icon: <FaLightbulb /> },
  { title: 'الالتزام', desc: 'نحترم الوقت ونلتزم بتسليم مشاريعنا في المواعيد.', icon: <FaClock /> },
  { title: 'الجودة', desc: 'نلتزم بتقديم منتجات مطابقة لأعلى معايير الجودة.', icon: <FaShieldAlt /> },
];

const capabilities = [
  'خطوط إنتاج مجهزة بأحدث ماكينات القص والثني و CNC.',
  'وحدة طلاء إلكتروستاتيك لضمان مقاومة الصدأ والعوامل الجوية.',
  'معمل اختبارات معتمد لإجراء الفحوصات القياسية قبل التسليم.',
  'فريق هندسي متخصص في تصميم اللوحات المعقدة وأنظمة التحكم.',
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* Header Banner */}
      <div className="bg-primary py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-10" style={{ backgroundImage: 'url("/engineer.png")' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              قصة نجاحنا
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">من نحن</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content (Who We Are) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <img 
                  src="/engineer.png" 
                  alt="مهندس كهرباء يعمل على لوحة" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                <div className="absolute bottom-8 right-8 left-8 border-l-4 border-accent pl-4">
                  <div className="text-white text-3xl font-black mb-1">عماد الحلواني</div>
                  <div className="text-gray-300 text-lg font-bold">للوحات الكهربائية وتكنولوجيا التحكم</div>
                </div>
              </div>
            </motion.div>

            {/* Text & Stats Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <h4 className="text-accent font-bold text-lg mb-2 flex items-center gap-2">
                <FaIndustry />
                تاريخنا وهويتنا
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight">
                رواد صناعة اللوحات <br/><span className="text-accent">الكهربائية في مصر</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg font-medium leading-relaxed mb-12">
                <p>
                  منذ تأسيسنا، اتخذنا من الدقة والموثوقية نهجاً راسخاً في كل خطوة نخطوها. بدأنا كورشة عمل طموحة لتتطور قدراتنا حتى أصبحنا صرحاً صناعياً متكاملاً يقدم حلول الطاقة للمشاريع القومية والتجارية الكبرى.
                </p>
                <p>
                  نحن لا نجمع المكونات فحسب؛ بل نبتكر أنظمة طاقة آمنة، نختبرها بأقسى الظروف، ونسلمها جاهزة لتكون القلب النابض لأي منشأة، مع التزامنا التام بالمواصفات القياسية العالمية (IEC).
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-gray-100">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-accent text-2xl mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-black text-primary mb-1" dir="ltr">{stat.value}</div>
                    <div className="text-sm font-bold text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-bg-light relative border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
              <FaEye className="text-5xl text-accent/20 absolute bottom-6 left-6 group-hover:scale-150 transition-transform duration-500" />
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-xl text-2xl mb-6 shadow-md">
                <FaEye />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4">رؤيتنا</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                أن نكون الخيار الأول والشريك الهندسي الأكثر موثوقية في مجال تصنيع وتوريد اللوحات الكهربائية في الشرق الأوسط، والمساهمة الفعالة في تطوير البنية التحتية من خلال حلول طاقة مستدامة وآمنة.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-primary"></div>
              <FaBullseye className="text-5xl text-primary/10 absolute bottom-6 left-6 group-hover:scale-150 transition-transform duration-500" />
              <div className="w-14 h-14 bg-accent text-white flex items-center justify-center rounded-xl text-2xl mb-6 shadow-md">
                <FaBullseye />
              </div>
              <h3 className="text-3xl font-black text-primary mb-4">رسالتنا</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                تلبية تطلعات عملائنا من خلال تقديم لوحات تحكم وتوزيع عالية الكفاءة، مصنعة بأيادي فريق هندسي محترف وفق أعلى معايير الجودة العالمية، مع الالتزام التام بالأسعار التنافسية ومواعيد التسليم الدقيقة.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <h4 className="text-accent font-bold text-lg mb-2 flex items-center gap-2">
                <FaCogs />
                إمكانياتنا
              </h4>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">قدرات تصنيعية متطورة</h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8">
                نمتلك في مصنعنا بنية تحتية هندسية متكاملة تضمن تحويل التصاميم المعقدة إلى واقع ملموس بدقة متناهية. لا نعتمد على جهات خارجية، بل ندير كامل العملية الإنتاجية تحت سقف واحد لضمان الجودة الفائقة.
              </p>
              
              <ul className="space-y-5">
                {capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <FaCheckCircle className="text-accent mt-1 flex-shrink-0 text-xl" />
                    <span className="text-gray-700 font-bold text-lg">{cap}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/factory-floor.png" 
                  alt="صالة التصنيع داخل المصنع" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white relative inline-block">
              قيمنا الأساسية
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center px-4 ${idx !== values.length - 1 ? 'lg:border-l lg:border-white/10' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-accent text-3xl mb-6 shadow-[0_0_15px_rgba(255,165,0,0.1)] hover:bg-accent hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">هل تبحث عن شريك موثوق لمشروعك القادم؟</h2>
          <p className="text-white/90 text-lg font-medium mb-8 max-w-2xl mx-auto">
            تواصل مع خبرائنا الآن للحصول على استشارة هندسية وعرض سعر مخصص لاحتياجاتك.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 font-bold py-4 px-10 rounded-lg shadow-lg transition-colors text-lg">
              تواصل مع المبيعات
            </Link>
            <Link to="/#المنتجات" className="bg-primary hover:bg-[#081a2e] text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-colors text-lg">
              استكشف منتجاتنا
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
