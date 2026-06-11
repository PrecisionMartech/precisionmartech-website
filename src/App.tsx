import { useEffect, useState } from 'react';
import './index.css';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-wordmark">Precision Martech LLC</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Start a project
        </button>
      </div>
    </nav>
  );
}

function HeroPanel() {
  return (
    <div className="hero-right">
      <div className="hero-card">
        <div className="hero-card-row">
          <div>
            <div className="hc-label">Active builds</div>
            <div className="hc-value accent">12</div>
            <div className="hc-desc"><span className="status-dot" />All systems live</div>
          </div>
          <div>
            <div className="hc-label">Avg. delivery</div>
            <div className="hc-value">3.2<span style={{fontSize:'1rem',color:'var(--text-secondary)'}}>wk</span></div>
            <div className="hc-desc">Brief to launch</div>
          </div>
        </div>
      </div>
      <div className="hero-card">
        <div className="hc-label">Output — 2025</div>
        <div className="bar-row">
          {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="bar" />)}
        </div>
      </div>
      <div className="hero-card">
        <div className="hc-label">What we build</div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.6rem',marginTop:'0.75rem'}}>
          {['Websites & e-commerce','Web & mobile apps','AI automations'].map((s,i) => (
            <div key={i} style={{display:'flex',alignItems:'center',gap:'0.75rem',padding:'0.6rem 0',borderBottom:i<2?'1px solid var(--border)':'none'}}>
              <div style={{width:6,height:6,borderRadius:'50%',background:'var(--electric)',flexShrink:0}} />
              <span style={{fontSize:'0.88rem',color:'var(--text-secondary)'}}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-tag reveal">Precision Martech LLC</div>
          <h1 className="hero-h1 reveal" data-delay="1">
            Built with<br/><em>intent.</em><br/>Shipped to work.
          </h1>
          <p className="hero-p reveal" data-delay="2">
            We design and build websites, apps, and AI-powered automations for small businesses, e-commerce brands, and agency partners who need technology that performs.
          </p>
          <div className="hero-actions reveal" data-delay="3">
            <a href="#services" className="btn-fill">See what we build</a>
            <a href="#contact" className="btn-line">Start a project</a>
          </div>
        </div>
        <HeroPanel />
      </div>
    </section>
  );
}

const SERVICES = [
  { num:'01', name:'Websites', short:'Fast. Sharp. Conversion-ready.',
    desc:'Marketing sites, landing pages, and e-commerce storefronts built to load fast, represent your brand with precision, and turn visitors into customers.',
    tags:['Marketing sites','E-commerce','Landing pages','CMS integration','Performance builds','Mobile-first'] },
  { num:'02', name:'Apps', short:'Tools people actually use.',
    desc:'Web and mobile applications built for real-world use cases. From internal dashboards to customer-facing products, built with clean architecture and long-term maintainability.',
    tags:['Web apps','Mobile apps','Custom dashboards','API integrations','SaaS tools','Cross-platform'] },
  { num:'03', name:'AI Automations', short:'Less manual work. More throughput.',
    desc:'Intelligent workflows that eliminate repetitive work and scale your operations. AI-powered pipelines tailored to your business — from outreach to content to internal process automation.',
    tags:['Workflow automation','Lead systems','AI pipelines','CRM integration','Custom agents','N8N / Zapier'] },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-inner">
        <div className="sec-eyebrow reveal">What we do</div>
        <h2 className="sec-title reveal" data-delay="1">Three disciplines.<br/>One precise team.</h2>
        {SERVICES.map(s => (
          <div className="service-item" key={s.num}>
            <div className="si-meta reveal">
              <div className="si-num">{s.num}</div>
              <div className="si-name">{s.name}</div>
              <div className="si-short">{s.short}</div>
            </div>
            <div className="si-body reveal" data-delay="1">
              <p className="si-desc">{s.desc}</p>
              <div className="si-features">{s.tags.map(t => <span className="si-tag" key={t}>{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({name:'',email:'',company:'',service:'',message:''});
  const [status, setStatus] = useState<'idle'|'busy'|'done'>('idle');
  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({...f, [e.target.name]: e.target.value}));
  const send = () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('busy');
    setTimeout(() => setStatus('done'), 1500);
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <div className="sec-eyebrow reveal">Get in touch</div>
          <h2 className="sec-title reveal" data-delay="1">Let's build something precise.</h2>
          <p className="contact-sub reveal" data-delay="2">Tell us about your project and we'll respond within one business day. Whether you're a local business ready to grow online or an agency that needs a trusted build partner.</p>
          <div className="contact-meta reveal" data-delay="3">
            <div className="cm-row"><div className="cm-label">Website</div><div className="cm-val">precisionmartech.com</div></div>
            <div className="cm-row"><div className="cm-label">Services</div><div className="cm-val">Websites · Apps · AI Automations</div></div>
            <div className="cm-row"><div className="cm-label">White label</div><div className="cm-val">Agency partnerships available</div></div>
          </div>
        </div>
        <div className="reveal" data-delay="1">
          {status === 'done' ? (
            <div className="form-success">
              <div className="fs-label">Message received</div>
              <div className="fs-head">We'll be in touch shortly.</div>
              <div className="fs-sub">Expect a reply within one business day.</div>
            </div>
          ) : (
            <div className="contact-form">
              <div className="cf-row">
                <div className="cf-group"><label>Name</label><input name="name" type="text" placeholder="Your name" value={form.name} onChange={set}/></div>
                <div className="cf-group"><label>Email</label><input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={set}/></div>
              </div>
              <div className="cf-row">
                <div className="cf-group"><label>Company</label><input name="company" type="text" placeholder="Optional" value={form.company} onChange={set}/></div>
                <div className="cf-group">
                  <label>I need</label>
                  <select name="service" value={form.service} onChange={set}>
                    <option value="">Select a service</option>
                    <option value="website">Website</option>
                    <option value="app">App</option>
                    <option value="ai">AI Automation</option>
                    <option value="multiple">Multiple services</option>
                    <option value="whitelabel">White label build</option>
                  </select>
                </div>
              </div>
              <div className="cf-group"><label>Project details</label><textarea name="message" placeholder="Tell us what you're building..." value={form.message} onChange={set}/></div>
              <div className="form-footer">
                <button className="btn-fill" onClick={send} disabled={status==='busy'}>{status==='busy'?'Sending...':'Send message'}</button>
                <span className="form-note">Response within 1 business day</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-wordmark">Precision Martech LLC</div>
        <div className="footer-copy">© {new Date().getFullYear()} Precision Martech LLC</div>
        <div className="footer-copy">precisionmartech.com</div>
      </div>
    </footer>
  );
}

export default function App() {
  useReveal();
  return (
    <div className="site-content">
      <Nav /><Hero /><Services /><Contact /><Footer />
    </div>
  );
}
