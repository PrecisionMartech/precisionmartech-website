import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // On any page other than home the backdrop is light, so the nav needs its
  // solid treatment from the start or the light text is invisible.
  const alwaysSolid = pathname !== '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /** Scroll to a home-page section, routing back home first if needed. */
  const goToSection = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <nav className={`nav${scrolled || alwaysSolid ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-wordmark" style={{ textDecoration: 'none' }}>
          Precision Martech LLC
        </Link>
        <ul className="nav-links">
          <li><a href="/#services" onClick={e => { e.preventDefault(); goToSection('services'); }}>Services</a></li>
          <li><Link to="/email-marketing">Emails</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><a href="/#contact" onClick={e => { e.preventDefault(); goToSection('contact'); }}>Contact</a></li>
        </ul>
        <button className="nav-cta" onClick={() => goToSection('contact')}>
          Start a project
        </button>
      </div>
    </nav>
  );
}
