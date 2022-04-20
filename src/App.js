import CareersPage from 'pages/CareersPage';
import ForMerchantsPage from 'pages/ForMarchentsPage';
import HomePage from 'pages/HomePage';
import HowItWorksPage from 'pages/HowItWorksPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="career" element={<CareersPage />} />
      <Route path="how-it-works" element={<HowItWorksPage />} />
      <Route path="merchants" element={<ForMerchantsPage />} />
    </Routes>
  );
}

export default App;
