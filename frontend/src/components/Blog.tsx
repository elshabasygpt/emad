import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaAngleLeft } from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: 'توقيع عقد توريد أضخم مشروع في المنطقة الصناعية',
    excerpt: 'شهدت الشركة توقيع عقد جديد لتوريد لوحات التوزيع الرئيسية لمجمع مصانع جديد، مما يعزز مكانتنا في السوق.',
    date: '15 مايو 2026',
    category: 'أخبار الشركة',
    image: '/project-factory.png',
  },
  {
    id: 2,
    title: 'كيف تختار لوحة ATS المناسبة لمنشأتك؟',
    excerpt: 'دليل شامل يوضح المعايير الأساسية لاختيار لوحات التحويل التلقائي لضمان استمرارية التيار الكهربائي بلا انقطاع.',
    date: '2 مايو 2026',
    category: 'نصائح هندسية',
    image: '/panel-ats.png',
  },
  {
    id: 3,
    title: 'أهمية الفحص الدوري للوحات الكهربائية',
    excerpt: 'تعرف على أبرز الخطوات الوقائية التي يجب اتباعها للحفاظ على كفاءة اللوحات وتجنب الأعطال المفاجئة.',
    date: '20 أبريل 2026',
    category: 'صيانة',
    image: '/engineer.png',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="الأخبار" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 relative inline-block">
              الأخبار والمقالات
              <span className="absolute -bottom-3 right-0 w-20 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 font-medium">
              تابع أحدث أخبار المصنع والمقالات الهندسية المتخصصة.
            </p>
          </motion.div>
          
          <button className="text-accent font-bold hover:text-primary transition-colors flex items-center gap-2 mt-4 md:mt-0 group">
            عرض كل المقالات
            <FaAngleLeft className="transform group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-bg-light rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary z-10 shadow-sm">
                  {article.category}
                </div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-4">
                  <FaCalendarAlt className="text-accent" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-200">
                  <button className="text-primary font-bold text-sm hover:text-accent transition-colors flex items-center gap-2">
                    اقرأ المزيد
                    <FaAngleLeft className="text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
