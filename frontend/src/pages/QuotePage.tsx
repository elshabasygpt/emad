import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaFileInvoiceDollar, FaCheckCircle, FaCloudUploadAlt, FaPaperPlane, FaUserTie, FaProjectDiagram, FaCogs } from 'react-icons/fa';

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: '',
    role: 'contractor',
    company: '',
    phone: '',
    email: '',
    // Step 2: Project Details
    projectName: '',
    projectLocation: '',
    projectSector: 'industrial',
    // Step 3: Technical Specs
    panelTypes: [] as string[],
    additionalNotes: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const panelOptions = [
    { id: 'mdb', label: 'لوحات التوزيع الرئيسية (MDB / SMDB)' },
    { id: 'mcc', label: 'لوحات التحكم بالمحركات (MCC)' },
    { id: 'ats', label: 'لوحات التحويل التلقائي (ATS)' },
    { id: 'plc', label: 'لوحات التحكم المبرمج (PLC)' },
    { id: 'sync', label: 'لوحات التزامن (Synchronizing)' },
    { id: 'pfc', label: 'لوحات تحسين معامل القدرة (Capacitor Banks)' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (id: string) => {
    setFormData(prev => {
      const currentTypes = [...prev.panelTypes];
      if (currentTypes.includes(id)) {
        return { ...prev, panelTypes: currentTypes.filter(t => t !== id) };
      } else {
        return { ...prev, panelTypes: [...currentTypes, id] };
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="pt-20 bg-bg-light min-h-screen flex items-center justify-center py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 text-center max-w-2xl mx-auto w-full mx-6"
        >
          <FaCheckCircle className="text-8xl text-green-500 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">تم استلام طلبك بنجاح!</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            شكراً لثقتكم بمصنع عماد الحلواني. لقد تم توجيه طلبكم إلى قسم التسعير والمبيعات، وسيقوم أحد مهندسينا بالتواصل معكم في أقرب وقت ممكن لمناقشة التفاصيل وتقديم أفضل عرض سعر.
          </p>
          <Link to="/" className="bg-primary hover:bg-accent text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-all text-lg inline-block">
            العودة للرئيسية
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-bg-light min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat mix-blend-luminosity opacity-10" style={{ backgroundImage: 'url("/electrical-panel.png")' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <FaFileInvoiceDollar className="text-5xl text-accent mb-4" />
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 relative inline-block tracking-tight"
            >
              طلب عرض سعر (RFQ)
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mt-2 max-w-2xl mx-auto font-medium"
            >
              يرجى تعبئة النموذج أدناه وتوفير أكبر قدر من التفاصيل أو المخططات لنتمكن من تقديم عرض سعر دقيق وتنافسي لمشروعك.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            
            {/* Step 1: Client Info */}
            <div className="p-8 md:p-12 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">1</div>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <FaUserTie className="text-gray-400" />
                  بيانات العميل / الشركة
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الاسم بالكامل <span className="text-red-500">*</span></label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white" placeholder="أدخل اسمك" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">الدور الوظيفي <span className="text-red-500">*</span></label>
                  <select name="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white">
                    <option value="owner">المالك / مطور المشروع</option>
                    <option value="consultant">استشاري المشروع</option>
                    <option value="contractor">المقاول الرئيسي / مقاول باطن</option>
                    <option value="purchasing">مهندس مشتريات</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">اسم الشركة <span className="text-red-500">*</span></label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white" placeholder="أدخل اسم الشركة" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">رقم الجوال <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} dir="ltr" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white text-right" placeholder="+20 1X XXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} dir="ltr" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white text-right" placeholder="email@company.com" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Project Details */}
            <div className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">2</div>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <FaProjectDiagram className="text-gray-400" />
                  بيانات المشروع
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-bold mb-2">اسم المشروع <span className="text-red-500">*</span></label>
                  <input type="text" name="projectName" required value={formData.projectName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white" placeholder="مثال: مصنع للصناعات الغذائية" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">قطاع المشروع <span className="text-red-500">*</span></label>
                  <select name="projectSector" value={formData.projectSector} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white">
                    <option value="industrial">صناعي (مصانع ومحطات)</option>
                    <option value="medical">طبي (مستشفيات ومراكز)</option>
                    <option value="commercial">تجاري وإداري</option>
                    <option value="residential">سكني فاخر (أبراج ومجمعات)</option>
                    <option value="infrastructure">بنية تحتية (مياه وصرف)</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-gray-700 font-bold mb-2">الموقع الجغرافي <span className="text-red-500">*</span></label>
                  <input type="text" name="projectLocation" required value={formData.projectLocation} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white" placeholder="المدينة، المنطقة الصناعية..." />
                </div>
              </div>
            </div>

            {/* Step 3: Technical Specs */}
            <div className="p-8 md:p-12 border-b border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-xl font-bold">3</div>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <FaCogs className="text-gray-400" />
                  المتطلبات الفنية
                </h2>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-bold mb-4">أنواع اللوحات المطلوبة للتسعير (يمكن اختيار أكثر من نوع):</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {panelOptions.map(panel => (
                    <label key={panel.id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.panelTypes.includes(panel.id) ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input 
                        type="checkbox" 
                        checked={formData.panelTypes.includes(panel.id)}
                        onChange={() => handleCheckboxChange(panel.id)}
                        className="w-5 h-5 text-accent focus:ring-accent rounded border-gray-300"
                      />
                      <span className="font-medium text-gray-800">{panel.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">ملاحظات إضافية أو تفاصيل المكونات (ماركة القواطع المفضلة الخ...)</label>
                <textarea 
                  name="additionalNotes" 
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-gray-50 focus:bg-white resize-y"
                  placeholder="مثال: يرجى تسعير اللوحات باستخدام مكونات شنايدر إلكتريك فقط..."
                ></textarea>
              </div>
            </div>

            {/* Step 4: File Upload & Submit */}
            <div className="p-8 md:p-12 bg-gray-50/50">
              <div className="mb-10">
                <label className="block text-gray-700 font-bold mb-4">المرفقات (Single Line Diagram / BOQ)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center bg-white hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer relative">
                  <input 
                    type="file" 
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg"
                  />
                  <div className="flex flex-col items-center pointer-events-none">
                    <FaCloudUploadAlt className="text-5xl text-gray-400 mb-4" />
                    {fileName ? (
                      <div className="text-accent font-bold text-lg mb-2">{fileName}</div>
                    ) : (
                      <>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">اضغط هنا أو اسحب الملفات للرفع</h4>
                        <p className="text-sm text-gray-500">الصيغ المدعومة: PDF, Excel, Word, AutoCAD (أقصى حجم 10MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[250px] bg-primary hover:bg-accent text-white font-black py-5 px-12 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all text-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mx-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      إرسال طلب عرض السعر
                    </>
                  )}
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  بإرسالك لهذا الطلب، أنت توافق على تواصل فريق المبيعات معك.
                </p>
              </div>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
};

export default QuotePage;
