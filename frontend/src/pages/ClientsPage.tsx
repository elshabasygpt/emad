import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaQuoteRight, FaStar, FaHandshake, FaArrowLeft } from 'react-icons/fa';

// Reusing generated logos to create a rich grid
const logos = [
  { src: '/logo-1.png', alt: 'Client 1' },
  { src: '/logo-2.png', alt: 'Client 2' },
  { src: '/logo-3.png', alt: 'Client 3' },
  { src: '/logo-4.png', alt: 'Client 4' },
  { src: '/logo-5.png', alt: 'Client 5' },
  { src: '/logo-2.png', alt: 'Client 6' },
  { src: '/logo-1.png', alt: 'Client 7' },
  { src: '/logo-4.png', alt: 'Client 8' },
  { src: '/logo-3.png', alt: 'Client 9' },
  { src: '/logo-5.png', alt: 'Client 10' },
  { src: '/logo-1.png', alt: 'Client 11' },
  { src: '/logo-2.png', alt: 'Client 12' },
];

const testimonials = [
  {
    text: "التعامل مع مصنع عماد الحلواني كان نقطة تحول في مشاريعنا. دقة في مواعيد التسليم واهتمام بأدق التفاصيل الفنية في لوحات الـ MDB.",
    author: "م. أحمد عبد الرحمن",
    position: "مدير مشروع، شركة النخبة للمقاولات",
    rating: 5,
  },
  {
    text: "احترافية عالية في تصميم وتجميع لوحات التحكم. المكونات المستخدمة أصلية والتشطيب النهائي للوحات ممتاز جداً ويعكس خبرة كبيرة.",
    author: "د. طارق محمود",
    position: "استشاري كهروميكانيكا",
    rating: 5,
  },
  {
    text: "لقد اعتمدنا عليهم في توريد اللوحات الكهربائية لمستشفى الشفاء، ولمسنا منهم دعماً فنياً رائعاً حتى بعد انتهاء فترة التوريد والتركيب.",
    author: "م. سمير حسن",
    position: "المدير الفني، المستشفى التخصصي",
    rating: 5,
  }
];

const ClientsPage: React.FC = () => {
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
              شركاء النجاح
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-accent rounded-full"></span>
            </motion.h1>
            <div className="flex items-center text-gray-300 text-sm font-bold gap-3 mt-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md">
              <Link to="/" className="hover:text-accent transition-colors">الرئيسية</Link>
              <FaAngleLeft className="text-xs text-gray-400" />
              <span className="text-white">العملاء</span>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mt-8 max-w-2xl mx-auto font-medium leading-relaxed"
            >
              ثقة كبرى الشركات والمؤسسات هي رصيدنا الأغلى. نفخر بتقديم حلول طاقة موثوقة لقطاع عريض من العملاء.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Clients Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">الشركات التي وثقت بنا</h2>
            <p className="text-gray-500 font-medium text-lg">قائمة ببعض عملائنا المميزين في مختلف القطاعات.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-bg-light border border-gray-100 rounded-2xl p-8 flex items-center justify-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-accent/30 transition-all duration-300 group aspect-[3/2]"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-w-[120px] w-full h-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 relative inline-block">
                آراء العملاء
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-accent rounded-full"></span>
              </h2>
              <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto font-medium">
                ماذا يقول الاستشاريون ومديرو المشاريع عن جودة منتجاتنا وخدماتنا.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
              >
                <FaQuoteRight className="text-4xl text-accent/20 absolute top-8 right-8 group-hover:text-accent/40 transition-colors" />
                
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                
                <p className="text-gray-600 font-medium leading-relaxed mb-8 text-lg relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {testimonial.author.charAt(3)}
                  </div>
                  <div>
                    <h4 className="font-black text-primary text-lg">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 font-bold">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary border-t border-white/10 text-center">
        <div className="container mx-auto px-6">
          <FaHandshake className="text-6xl text-accent mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">كن جزءاً من قصة نجاحنا</h2>
          <p className="text-gray-300 text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            انضم إلى قائمة شركاء النجاح واحصل على لوحات كهربائية مصنعة بأعلى معايير الجودة العالمية.
          </p>
          <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-lg inline-flex items-center gap-3 transform hover:-translate-y-1">
            تواصل معنا الآن
            <FaArrowLeft />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ClientsPage;
