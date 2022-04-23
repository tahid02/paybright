import CareersPage from 'pages/CareersPage';
import CompanyPage from 'pages/companyPage';
import ForMerchantsPage from 'pages/ForMarchentsPage';
import HomePage from 'pages/HomePage';
import HowItWorksPage from 'pages/HowItWorksPage';
import PressPage from 'pages/PressPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {' '}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="company" element={<CompanyPage />} />

        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="for-merchants" element={<ForMerchantsPage />} />
        <Route path="press" element={<PressPage />} />
        <Route
          path="*"
          element={<h1 className="text-center text-danger pt-5">Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
