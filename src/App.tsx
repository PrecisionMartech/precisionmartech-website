import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import EmailPortfolio from './pages/EmailPortfolio';
import Work from './pages/Work';
import './index.css';

/** Reset scroll position on navigation, unless we're heading to a section. */
function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if ((state as { scrollTo?: string } | null)?.scrollTo) {
      return;
    }

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToHash = () => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };

      requestAnimationFrame(scrollToHash);
      const retry = window.setTimeout(scrollToHash, 100);
      return () => window.clearTimeout(retry);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, state]);

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
          <Route path="/work" element={<Work />} />
          <Route path="/websites-and-apps" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/email-marketing" element={<EmailPortfolio />} />
          <Route path="/email-portfolio" element={<EmailPortfolio />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
