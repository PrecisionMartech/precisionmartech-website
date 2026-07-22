import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useReveal } from '../useReveal';

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

/* Where the contact form delivers.
   Create a form at formspree.io, then paste the endpoint it gives you here.
   Your email address lives on their side and never appears in this code or in
   anything a visitor can view-source, so it stays out of reach of scrapers. */
const FORM_ENDPOINT = 'https://formspree.io/f/xqerdlra';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Contact() {
  const [form, setForm] = useState({name:'',email:'',company:'',service:'',message:''});
  const [status, setStatus] = useState<'idle'|'busy'|'done'|'error'>('idle');
  const [error, setError] = useState('');
  const set = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    if (status === 'error') { setStatus('idle'); setError(''); }
    setForm(f => ({...f, [e.target.name]: e.target.value}));
  };

  const send = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Add your name, email and a short note so we know what to reply to.');
      setStatus('error');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError('That email address looks incomplete — worth a second check.');
      setStatus('error');
      return;
    }

    setStatus('busy');
    setError('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim() || 'Not given',
          service: form.service || 'Not specified',
          message: form.message.trim(),
          _subject: `precisionmartech.com — new enquiry from ${form.name.trim()}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('done');
    } catch {
      setError('That did not send. Try again in a moment.');
      setStatus('error');
    }
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
              {error && (
                <div className="form-error" role="alert">{error}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  const location = useLocation();

  // When arriving from another page via a nav link, scroll to the target section.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      requestAnimationFrame(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.state]);

  return (
    <div className="home-page">
      <Hero /><Services /><Contact />
    </div>
  );
}
