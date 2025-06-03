import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load non-critical pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const SciencePage = lazy(() => import('./pages/SciencePage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={
          <Suspense fallback={<LoadingSpinner />}>
            <AboutPage />
          </Suspense>
        } />
        <Route path="products" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductsPage />
          </Suspense>
        } />
        <Route path="products/:id" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductDetailPage />
          </Suspense>
        } />
        <Route path="science" element={
          <Suspense fallback={<LoadingSpinner />}>
            <SciencePage />
          </Suspense>
        } />
        <Route path="partners" element={
          <Suspense fallback={<LoadingSpinner />}>
            <PartnersPage />
          </Suspense>
        } />
        <Route path="contact" element={
          <Suspense fallback={<LoadingSpinner />}>
            <ContactPage />
          </Suspense>
        } />
        <Route path="calculator" element={
          <Suspense fallback={<LoadingSpinner />}>
            <CalculatorPage />
          </Suspense>
        } />
        <Route path="*" element={<div className="container py-24 text-center">Страница не найдена</div>} />
      </Route>
    </Routes>
  );
}

export default App;