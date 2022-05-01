import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from 'layout/error-boundary';
import useDelay from 'hooks/useDelay';
import CustomerLoginPage from 'pages/CustomerLoginPage';
import MerchantLoginPage from 'pages/MerchantLoginPage';

const CareersPage = lazy(() => import('pages/CareersPage'));
const CompanyPage = lazy(() => import('pages/companyPage'));
const ForMerchantsPage = lazy(() => import('pages/ForMarchentsPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const HowItWorksPage = lazy(() => import('pages/HowItWorksPage'));
const PressPage = lazy(() => import('pages/PressPage'));

function App() {
  const { loading } = useDelay(5000); // delay for 5 second

  return (
    <Router>
      <ErrorBoundary>
        <Suspense
          fallback={
            loading && (
              <h1 className="py-5 text-center text-success">Loading...</h1>
            )
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="company" element={<CompanyPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="for-merchants" element={<ForMerchantsPage />} />
            <Route path="press" element={<PressPage />} />
            <Route path="customer-login" element={<CustomerLoginPage />} />{' '}
            <Route path="merchant-login" element={<MerchantLoginPage />} />{' '}
            <Route path="help" element={<p>This is a help page</p>} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-danger pt-5">Not Found</h1>
              }
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
