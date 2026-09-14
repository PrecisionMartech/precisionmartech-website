import { Link } from 'react-router-dom';
import { useReveal } from '../useReveal';
import '../work.css';

type Diff = { title: string; body: string };
const DIFFS: Diff[] = [
  { title: 'End to end', body: 'Design, build, and launch handled in one place — not passed between agencies.' },
  { title: 'Built to scale', body: "Clean, modern code that's easy to grow and add to as your business changes." },
  { title: 'You own it all', body: 'Your code, your accounts, your data. No lock-in and nothing held hostage.' },
  { title: 'Clear & fast', body: 'Straight timelines and a working preview you approve at every stage.' },
];

type Cap = { num: string; name: string; desc: string; tags: string[] };
const CAPS: Cap[] = [
  { num: '01', name: 'Websites & e-commerce',
    desc: 'Marketing sites, landing pages, and online stores built to load fast, look sharp, and turn visitors into customers.',
    tags: ['Marketing sites', 'E-commerce', 'Landing pages', 'CMS', 'SEO-ready', 'Mobile-first'] },
  { num: '02', name: 'Web applications',
    desc: 'Custom software with logins, data, and real logic — dashboards, client portals, and full SaaS products.',
    tags: ['Dashboards', 'Client portals', 'SaaS tools', 'Auth & roles', 'Real-time data'] },
  { num: '03', name: 'Mobile apps',
    desc: 'iOS and Android apps from a single codebase — polished, fast, and ready for the App Store and Play Store.',
    tags: ['iOS & Android', 'Cross-platform', 'Push notifications', 'Offline', 'Store launch'] },
  { num: '04', name: 'AI & automation',
    desc: 'Automations and AI tools that cut the repetitive work and connect the systems your business already runs on.',
    tags: ['Workflow automation', 'AI agents', 'Lead systems', 'CRM integration', 'n8n / Zapier'] },
  { num: '05', name: 'Integrations & APIs',
    desc: "Connect the tools you already use, move data between them, and add the features off-the-shelf software can't.",
    tags: ['REST APIs', 'Webhooks', 'Payments', 'GoHighLevel', 'Third-party APIs'] },
  { num: '06', name: 'Design & UX',
    desc: 'Interfaces that are clean, clear, and easy to use — designed and approved before we write any code.',
    tags: ['UI design', 'UX flows', 'Prototypes', 'Design systems', 'Branding'] },
];

type Step = { num: string; name: string; body: string };
const STEPS: Step[] = [
  { num: '01', name: 'Discovery', body: 'We learn your business, goals, and what the project actually needs to do.' },
  { num: '02', name: 'Design', body: 'Layouts and flows you can see and approve before a line of code is written.' },
  { num: '03', name: 'Build', body: 'We build it properly — clean, fast, and easy to expand later.' },
  { num: '04', name: 'Launch', body: 'We ship it live, test everything, and make sure it works on every device.' },
  { num: '05', name: 'Support', body: "Updates, tweaks, and new features whenever you're ready to grow." },
];

const TECH = ['React', 'TypeScript', 'Next.js', 'React Native', 'Tailwind CSS', 'Node.js',
  'Vite', 'Vercel', 'Supabase', 'Stripe', 'GoHighLevel', 'n8n', 'OpenAI API', 'Shopify'];

const scrollToCaps = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Work() {
  useReveal();
  return (
    <div className="work-page">

      {/* ── HERO ── */}
      <header className="wk-hero">
        <div className="wk-wrap">
          <div>
            <div className="wk-eyebrow wk-tag reveal">Websites &amp; Apps</div>
            <h1 className="wk-h1 reveal" data-delay="1">Whatever you need built,<br /><em>we build it.</em></h1>
            <p className="wk-hero-p reveal" data-delay="2">
              Websites, web apps, mobile apps, and AI automations — designed, built, and launched
              by one team. If it runs in a browser or on a phone, we can build it for your business.
            </p>
            <div className="wk-actions reveal" data-delay="3">
              <a href="#capabilities" className="btn-fill" onClick={scrollToCaps}>See what we build</a>
              <Link to="/#contact" className="btn-line">Ask for a quote</Link>
            </div>
          </div>
          <aside className="wk-panel reveal" data-delay="2">
            <div className="wk-card">
              <div className="wk-card-label">What we build</div>
              <div className="wk-stack-row"><span className="wk-dot" /><span>Websites &amp; e-commerce</span></div>
              <div className="wk-stack-row"><span className="wk-dot" /><span>Web apps, portals &amp; dashboards</span></div>
              <div className="wk-stack-row"><span className="wk-dot" /><span>Mobile apps (iOS &amp; Android)</span></div>
              <div className="wk-stack-row"><span className="wk-dot" /><span>AI automations &amp; internal tools</span></div>
              <div className="wk-stack-row"><span className="wk-dot" /><span>Integrations &amp; custom software</span></div>
            </div>
          </aside>
        </div>
      </header>

      {/* ── HOW WE WORK ── */}
      <section className="wk-block">
        <div className="wk-wrap">
          <div className="wk-head">
            <div className="wk-eyebrow reveal">How we work</div>
            <h2 className="wk-title reveal" data-delay="1">One team, start to finish.</h2>
            <p className="wk-lede reveal" data-delay="2">
              No handoffs, no offshore black box, no mystery. You work directly with the people
              building your project, and you see it come together every step of the way.
            </p>
          </div>
          <div className="wk-diffs">
            {DIFFS.map((d, i) => (
              <div className="wk-diff reveal" data-delay={String((i % 4) + 1)} key={d.title}>
                <h4>{d.title}</h4>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="wk-block" id="capabilities">
        <div className="wk-wrap">
          <div className="wk-head">
            <div className="wk-eyebrow reveal">Capabilities</div>
            <h2 className="wk-title reveal" data-delay="1">Everything it takes to ship a product.</h2>
            <p className="wk-lede reveal" data-delay="2">
              Pick one or combine them. Most projects start in one area and grow into others as the business does.
            </p>
          </div>
          <div className="wk-caps">
            {CAPS.map(c => (
              <div className="wk-cap reveal" key={c.num}>
                <div className="wk-cap-num">{c.num}</div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <ul>{c.tags.map(t => <li key={t}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="wk-block">
        <div className="wk-wrap">
          <div className="wk-head">
            <div className="wk-eyebrow reveal">How it works</div>
            <h2 className="wk-title reveal" data-delay="1">From idea to launched.</h2>
          </div>
          <div className="wk-steps">
            {STEPS.map(s => (
              <div className="wk-step reveal" key={s.num}>
                <div className="wk-step-num">{s.num}</div>
                <h4>{s.name}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="wk-block">
        <div className="wk-wrap">
          <div className="wk-head">
            <div className="wk-eyebrow reveal">Built with</div>
            <h2 className="wk-title reveal" data-delay="1">Modern tools, done right.</h2>
          </div>
          <div className="wk-tech reveal">
            {TECH.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="wk-cta">
        <div className="wk-wrap">
          <div className="wk-cta-inner reveal">
            <div>
              <h2>Have something to build?</h2>
              <p>Tell us what you have in mind — a site, an app, an automation, or all three — and we'll send back a quote and a plan.</p>
            </div>
            <Link to="/#contact" className="btn-fill" style={{ fontSize: '1rem', padding: '1.05rem 2.4rem' }}>Ask for a quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
