
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSettings from './pages/admin/AdminSettings';
import AdminPlaceholder from './pages/admin/AdminPlaceholder';

const PublicLayout = () => (
  <div className="font-sans text-gray-800 antialiased overflow-x-hidden selection:bg-accent selection:text-white">
    <Navbar />
    <Outlet />
    <Footer />
    <WhatsAppButton />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="projects" element={<AdminPlaceholder title="إدارة المشاريع" />} />
          <Route path="clients" element={<AdminPlaceholder title="إدارة العملاء" />} />
          <Route path="certificates" element={<AdminPlaceholder title="إدارة الشهادات" />} />
          <Route path="messages" element={<AdminPlaceholder title="رسائل التواصل" />} />
          <Route path="quotes" element={<AdminPlaceholder title="طلبات عروض السعر" />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
