import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'توسعات مصانع الصناعات الغذائية',
    location: 'المنطقة الصناعية السادسة',
    image: '/project-factory.png',
    tags: ['لوحات MDB', 'لوحات تحكم'],
  },
  {
    title: 'مستشفى السلام الدولي الجديد',
    location: 'التجمع الخامس',
    image: '/project-hospital.png',
    tags: ['لوحات ATS', 'توزيع فرعي SMDB'],
  },
  {
    title: 'محطة تنقية مياه الشرب',
    location: 'مدينة العبور',
    image: '/panel-3.png',
    tags: ['لوحات تحكم Pumping', 'MDB'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="المشاريع" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 relative inline-block">
              سابقة الأعمال
              <span className="absolute -bottom-3 right-0 w-24 h-1.5 bg-accent rounded-full"></span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mt-6 max-w-2xl font-medium leading-relaxed">
              نماذج مشرفة من مشاريعنا التي قمنا بتوريد اللوحات الكهربائية لها بمواصفات قياسية.
            </p>
          </div>
          <Link to="/projects" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white hidden md:block px-8 py-3 mt-4 md:mt-0 text-center rounded-lg font-bold transition-all">
            مشاهدة كل المشاريع
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(11,42,69,0.12)] transition-all duration-500 group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-bg-light text-primary px-3 py-1 rounded-md text-xs font-bold border border-gray-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                  <FaMapMarkerAlt className="text-accent" />
                  <span>{project.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link to="/projects" className="btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 w-full block rounded-lg font-bold transition-all">
            مشاهدة كل المشاريع
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;
