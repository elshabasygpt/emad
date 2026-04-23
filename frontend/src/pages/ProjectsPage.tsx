import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaMapMarkerAlt, FaCalendarAlt, FaIndustry, FaHospital, FaCity, FaBuilding, FaArrowLeft, FaBolt } from 'react-icons/fa';

const categories = [
  { id: 'all', name: 'الكل', icon: null },
  { id: 'industrial', name: 'قطاع صناعي', icon: <FaIndustry /> },
  { id: 'commercial', name: 'قطاع تجاري وإداري', icon: <FaCity /> },
  { id: 'healthcare', name: 'قطاع طبي', icon: <FaHospital /> },
  { id: 'residential', name: 'إسكان ومجمعات', icon: <FaBuilding /> },
];

const projects = [
  {
    id: 1,
    title: 'توسعات مستشفى الشفاء التخصصي',
    category: 'healthcare',
    location: 'القاهرة، مدينة نصر',
    year: '2023',
    scope: 'توريد وتركيب لوحات التوزيع الرئيسية MDB، ولوحات التحويل التلقائي ATS لضمان استمرارية التيار في غرف العمليات.',
    image: '/electrical-room.png',
  },
  {
    id: 2,
    title: 'مجمع مصانع النخبة للصناعات الثقيلة',
    category: 'industrial',
    location: 'المنطقة الصناعية، العاشر من رمضان',
    year: '2024',
    scope: 'تصميم وتصنيع لوحات تحكم متكاملة (PLC) لخطوط الإنتاج، بالإضافة إلى لوحات تحسين معامل القدرة (PFC).',
    image: '/factory-floor.png',
  },
  {
    id: 3,
    title: 'مول العاصمة التجاري (Capital Mall)',
    category: 'commercial',
    location: 'العاصمة الإدارية الجديدة',
    year: '2023',
    scope: 'توريد لوحات التوزيع الفرعية SMDB لجميع أدوار المول، ولوحات التحكم في أنظمة التكييف المركزي (HVAC).',
    image: '/panel-3.png',
  },
  {
    id: 4,
    title: 'محطة مياه الشرب الإقليمية',
    category: 'industrial',
    location: 'محافظة الدقهلية',
    year: '2022',
    scope: 'توريد لوحات تحكم للمضخات الغاطسة (Pump Control Panels) ولوحات التوزيع الرئيسية بالمحطة.',
    image: '/electrical-panel.png',
  },
  {
    id: 5,
    title: 'مشروع أبراج السكن الفاخر',
    category: 'residential',
    location: 'التجمع الخامس، القاهرة الجديدة',
    year: '2024',
    scope: 'توريد اللوحات العمومية للأبراج، ولوحات تحكم للمصاعد ومضخات مكافحة الحريق.',
    image: '/panel-ats.png',
  },
  {
    id: 6,
    title: 'المركز الطبي الدولي',
    category: 'healthcare',
    location: 'الإسكندرية',
    year: '2021',
    scope: 'صيانة وتحديث لوحات التوزيع الرئيسية وإضافة لوحات ATS ذكية للمبنى الجديد.',
    image: '/electrical-room.png',
  },
];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-20" style={{ backgroundImage: 'url("/electrical-room.png")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              سابقة أعمالنا
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">المشاريع</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium"
            >
              نفخر بشراكتنا في إنجاح كبرى المشاريع القومية والخاصة من خلال تقديم حلول طاقة موثوقة ومستدامة.
            </motion.p>
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
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 shadow-sm border ${
                  activeCategory === cat.id 
                    ? 'bg-accent text-white border-accent shadow-md scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'
                }`}
              >
                {cat.icon && <span className="text-lg">{cat.icon}</span>}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(11,42,69,0.15)] transition-all duration-500 group flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover relative z-0 transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                    <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                      <span className="bg-accent text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1">
                        <FaCalendarAlt />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col flex-grow relative border border-t-0 border-gray-100 rounded-b-2xl">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold mb-3">
                      <FaMapMarkerAlt className="text-accent" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {project.scope}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center text-primary font-bold text-sm">
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-accent">
                        <FaArrowLeft />
                      </span>
                      <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                        اطلب مشروعاً مماثلاً
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-xl font-bold">
              لا توجد مشاريع مسجلة في هذا القطاع حالياً.
            </div>
          )}

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <FaBolt className="text-6xl text-accent mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">لنجعل مشروعك القادم قصة نجاح جديدة!</h2>
          <p className="text-gray-300 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            نحن جاهزون لتقديم الحلول الهندسية وتصنيع اللوحات الكهربائية بأعلى معايير الجودة مهما كان حجم مشروعك.
          </p>
          <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg inline-flex items-center gap-3 transform hover:-translate-y-1">
            اطلب استشارة لمشروعك
            <FaArrowLeft />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ProjectsPage;
