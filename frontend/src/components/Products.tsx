import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const products = [
  {
    title: "لوحات توزيع رئيسية",
    code: "MDB",
    image: "/electrical-panel.png",
    desc: "لوحات التوزيع الرئيسية ذات الموثوقية العالية والقدرة على تحمل الجهود الكبيرة.",
  },
  {
    title: "لوحات فرعية",
    code: "SMDB",
    image: "/panel-3.png",
    desc: "حلول مثالية لتوزيع الطاقة في القطاعات الصناعية والتجارية بدقة وأمان.",
  },
  {
    title: "لوحات ATS",
    code: "ATS",
    image: "/panel-ats.png",
    desc: "مفاتيح التحويل التلقائي لضمان استمرارية التيار الكهربائي دون انقطاع.",
  },
  {
    title: "لوحات تحكم",
    code: "Control Panels",
    image: "/panel-2.png",
    desc: "لوحات تحكم ذكية مزودة بأحدث التقنيات لمراقبة وإدارة العمليات الصناعية.",
  },
];

const Products: React.FC = () => {
  return (
    <section id="المنتجات" className="section-padding bg-gray-50 relative py-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 relative inline-block">
              منتجاتنا
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium leading-relaxed">
              نقدم مجموعة متكاملة وموثوقة من اللوحات الكهربائية المصممة خصيصاً لتلبية متطلبات المشاريع الصناعية والتجارية الكبرى.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(11,42,69,0.15)] transition-all duration-500 group border border-gray-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-md text-sm font-bold shadow-sm">
                    {product.code}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>
                
                {/* Arrow indicator that moves on hover */}
                <div className="mt-auto flex items-center text-accent font-bold text-sm">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <FaArrowLeft />
                  </span>
                  <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                    عرض التفاصيل
                  </span>
                </div>
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
            <Link to="/products" className="btn-primary inline-flex px-10 py-4 text-lg shadow-lg hover:shadow-xl items-center justify-center gap-3 mx-auto">
              تصفح الكتالوج بالكامل
              <FaArrowLeft className="text-sm" />
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
