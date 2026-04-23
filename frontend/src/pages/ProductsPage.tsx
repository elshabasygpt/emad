import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaBolt, FaCheck, FaFileAlt } from 'react-icons/fa';

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'mdb', name: 'لوحات توزيع رئيسية (MDB)' },
  { id: 'smdb', name: 'لوحات فرعية (SMDB)' },
  { id: 'control', name: 'لوحات تحكم (Control Panels)' },
  { id: 'pfc', name: 'تحسين معامل القدرة (PFC)' },
  { id: 'ats', name: 'لوحات ATS' },
];

const catalog = [
  {
    id: 1,
    category: 'mdb',
    title: 'لوحة توزيع رئيسية MDB',
    code: 'MDB-4000A',
    image: '/electrical-panel.png',
    desc: 'لوحات مصممة لاستقبال الطاقة من المحول الرئيسي وتوزيعها على الشبكات الفرعية، تتحمل حتى 4000 أمبير.',
    features: ['درجة حماية تصل إلى IP54', 'هيكل معدني مجلفن ومطلي', 'قواطع هوائية عالية الجودة'],
  },
  {
    id: 2,
    category: 'smdb',
    title: 'لوحة توزيع فرعية SMDB',
    code: 'SMDB-800A',
    image: '/panel-3.png',
    desc: 'لوحات فرعية توزع الطاقة للأحمال المباشرة في المصانع والمنشآت التجارية.',
    features: ['درجة حماية IP43 إلى IP55', 'تصميم مدمج يوفر المساحة', 'سهولة الصيانة والوصول'],
  },
  {
    id: 3,
    category: 'control',
    title: 'لوحة تحكم للمضخات',
    code: 'Pump Control',
    image: '/panel-2.png',
    desc: 'حلول ذكية للتحكم في طلمبات المياه والتشغيل الآلي بواسطة أنظمة PLC و Inverters.',
    features: ['حماية المحركات من سقوط الفازات', 'شاشات لمس HMI', 'توفير استهلاك الطاقة'],
  },
  {
    id: 4,
    category: 'pfc',
    title: 'لوحة تحسين معامل القدرة',
    code: 'PFC Capacitor Bank',
    image: '/electrical-panel.png', // Reusing image temporarily
    desc: 'لوحات مصممة لتقليل المفاقيد الكهربائية وتجنب غرامات شركة الكهرباء.',
    features: ['مكثفات ألمانية عالية التحمل', 'ريليهات تحكم ذكية', 'حماية ضد التوافقيات (Harmonics)'],
  },
  {
    id: 5,
    category: 'ats',
    title: 'لوحة التحويل التلقائي ATS',
    code: 'ATS-1600A',
    image: '/panel-ats.png',
    desc: 'مفاتيح تحويل أوتوماتيكية بين المصدر الرئيسي والمولد لضمان عدم انقطاع التيار.',
    features: ['زمن تحويل قياسي', 'مكونات كهروميكانيكية موثوقة', 'إمكانية التشغيل اليدوي للطوارئ'],
  },
  {
    id: 6,
    category: 'control',
    title: 'لوحة تحكم خط إنتاج',
    code: 'Industrial PLC',
    image: '/panel-2.png',
    desc: 'أنظمة تحكم متكاملة لخطوط الإنتاج والمصانع للتحكم الدقيق في جميع مراحل التصنيع.',
    features: ['برمجة مخصصة', 'توافق مع جميع الحساسات', 'لوحات مطابقة لمواصفات الأمن الصناعي'],
  },
];

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? catalog 
    : catalog.filter(product => product.category === activeCategory);

  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-10" style={{ backgroundImage: 'url("/factory-floor.png")' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              منتجاتنا
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">المنتجات</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm border ${
                  activeCategory === cat.id 
                    ? 'bg-accent text-white border-accent shadow-md scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"></div>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-primary text-white px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                        {product.code}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-primary mb-3 leading-tight">{product.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <div className="mb-8 space-y-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaCheck className="text-accent mt-1 flex-shrink-0 text-sm" />
                          <span className="text-gray-700 font-bold text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                        <FaFileAlt />
                        اطلب عرض سعر
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-xl font-bold">
              لا توجد منتجات في هذا التصنيف حالياً.
            </div>
          )}

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <FaBolt className="text-6xl text-accent mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">هل لم تجد اللوحة المناسبة؟</h2>
          <p className="text-gray-300 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            نقوم بتصميم وتصنيع اللوحات الكهربائية الخاصة (Custom Panels) بناءً على الرسومات الهندسية والمواصفات الدقيقة لمشروعك.
          </p>
          <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg inline-flex items-center gap-3 transform hover:-translate-y-1">
            <FaFileAlt />
            اطلب تصنيع لوحة مخصصة
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
