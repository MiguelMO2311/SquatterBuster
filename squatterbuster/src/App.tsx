import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ReportProperty from './pages/ReportProperty';
import ContactCommunity from './pages/ContactCommunity';
import LegalAdvice from './pages/LegalAdvice';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report-property" element={<ReportProperty />} />
          <Route path="/contact-community" element={<ContactCommunity />} />
          <Route path="/legal-advice" element={<LegalAdvice />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
