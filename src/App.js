import CareersPage from 'pages/CareersPage';
import CompanyPage from 'pages/companyPage';
import ForMerchantsPage from 'pages/ForMarchentsPage';
import HomePage from 'pages/HomePage';
import HowItWorksPage from 'pages/HowItWorksPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="company" element={<CompanyPage />} />

      <Route path="how-it-works" element={<HowItWorksPage />} />
      <Route path="for-merchants" element={<ForMerchantsPage />} />
    </Routes>
  );
}

export default App;
