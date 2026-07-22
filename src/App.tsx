import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import './index.css';

/** Reset scroll position on navigation, unless we're heading to a section. */
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (!(state as { scrollTo?: string } | null)?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-content">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
