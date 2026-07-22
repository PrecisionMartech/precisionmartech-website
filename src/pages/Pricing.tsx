import { Link } from 'react-router-dom';
import { useReveal } from '../useReveal';
import '../pricing.css';

const PACKAGES = [
  { name: 'Starter', setup: '$1,500', mo: '$195/mo',
    what: 'One focused workflow', who: 'Best for a first automation' },
  { name: 'Growth', setup: '$3,500', mo: '$395/mo',
    what: 'Multi-step follow-up', who: 'Best for growing teams', featured: true },
  { name: 'Professional', setup: '$7,500', mo: '$750/mo',
    what: 'Connected automation system', who: 'Best for complex operations' },
  { name: 'Custom', setup: '$15,000+', mo: '$1,500+/mo',
    what: 'Custom architecture', who: 'Best for advanced needs' },
];

const TIERS = ['Starter', 'Growth', 'Pro', 'Custom'];

const MATRIX = [
  { cap: 'Workflow strategy & mapping', vals: ['Basic', 'Included', 'Included', 'Included'] },
  { cap: 'Email or SMS follow-up', vals: ['1 sequence', 'Multi-step', 'Advanced', 'Custom'] },
  { cap: 'CRM / spreadsheet updates', vals: ['1 system', '2 systems', 'Multi-system', 'Custom'] },
  { cap: 'Client-facing intake form', vals: ['Optional', 'Included', 'Included', 'Custom portal'] },
  { cap: 'Internal intake dashboard', vals: ['—', 'Optional', 'Included', 'Custom'] },
  { cap: 'Reporting & optimization', vals: ['Basic', 'Monthly', 'Advanced', 'Custom'] },
];

const SOLUTIONS = [
  { num: '01', name: 'Basic Follow-Up Automation',
    desc: 'Update the CRM or spreadsheet and send one automated email or SMS follow-up.' },
  { num: '02', name: 'Multi-Step Follow-Up',
    desc: 'Timed email and SMS sequences with branching, reminders and status updates.' },
  { num: '03', name: 'Lead Intake & Client Form',
    desc: 'Website form captures a lead, validates details and starts the follow-through.' },
  { num: '04', name: 'Internal Client Intake System',
    desc: 'A private form or dashboard staff uses to enter a new client and trigger tasks.' },
  { num: '05', name: 'CRM & Spreadsheet Automation',
    desc: 'Sync records, remove duplicate entry and keep stages, owners and notes current.' },
  { num: '06', name: 'Advanced Custom Automation',
    desc: 'AI-assisted routing, document generation, dashboards, approvals and custom APIs.' },
];

const MODEL = [
  { label: 'One-time setup',
    body: 'Discovery, workflow mapping, account configuration, implementation, testing, documentation and launch.' },
  { label: 'Monthly management',
    body: 'Monitoring, small adjustments, troubleshooting, performance review and reasonable ongoing support.' },
  { label: 'Software costs', note: true,
    body: 'CRM, email, SMS, forms, automation platforms, AI usage and other third-party subscriptions are billed separately.' },
];

const DELIVERABLES = [
  { name: 'Starter', from: 'From $1,500 setup + $195/mo', items: [
    'One clearly defined automation',
    'One connected source and destination',
    'One basic email or SMS sequence',
    'Launch testing and handoff guide',
  ]},
  { name: 'Growth', from: 'From $3,500 setup + $395/mo', featured: true, items: [
    'Multi-step follow-up sequence',
    'Form, spreadsheet and CRM integration',
    'Branching based on status or response',
    'Monthly monitoring and refinements',
  ]},
  { name: 'Professional', from: 'From $7,500 setup + $750/mo', items: [
    'Multiple connected workflows',
    'Advanced CRM pipeline automation',
    'Internal intake or operating dashboard',
    'Reporting, optimization and priority support',
  ]},
  { name: 'Custom / Enterprise', from: 'From $15,000 setup + $1,500+/mo', items: [
    'Custom architecture and system design',
    'AI agents, APIs or document workflows',
    'Complex approvals and role-based routing',
    'Custom support and service agreement',
  ]},
];

const ADDONS = [
  { name: 'Additional automated workflow', price: '$750–$2,500' },
  { name: 'Additional follow-up sequence', price: '$500–$1,500' },
  { name: 'Website or embedded intake form', price: '$500–$1,500' },
  { name: 'Internal staff intake form', price: '$750–$2,500' },
  { name: 'CRM cleanup or data migration', price: '$750–$3,000' },
  { name: 'Dashboard or reporting view', price: '$1,000–$3,500' },
  { name: 'AI-assisted email drafting', price: '$750–$2,500' },
  { name: 'Training session & documentation', price: '$300–$900' },
];

export default function Pricing() {
  useReveal();
  return (
    <div className="pricing-page">
      <div className="pr-inner">

        <header className="pr-masthead reveal">
          <div>
            <div className="pr-mast-mark">Precision Martech LLC</div>
            <p className="pr-mast-tag">
              Practical systems that reduce manual work and keep leads moving.
            </p>
          </div>
          <div className="pr-mast-contact">
            <a href="https://precisionmartech.com">precisionmartech.com</a><br />
            <a href="tel:+18186310588">818-631-0588</a><br />
            <a href="mailto:jackc@precisionmartech.com">jackc@precisionmartech.com</a>
          </div>
        </header>

        {/* ── Packages ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">Choose the level of support</div>
          <h1 className="pr-title reveal" data-delay="1">
            Automation packages built around your workflow
          </h1>
          <p className="pr-lede reveal" data-delay="2">
            Start with one focused automation or build a connected system across forms,
            spreadsheets, email, SMS and your CRM. Pricing below is a practical starting
            point and final scope is confirmed after discovery.
          </p>

          <div className="pr-packages">
            {PACKAGES.map(p => (
              <div key={p.name}
                   className={`pr-pkg reveal${p.featured ? ' pr-pkg--featured' : ''}`}>
                {p.featured && <div className="pr-badge">Most popular</div>}
                <div className="pr-pkg-name">{p.name}</div>
                <div className="pr-pkg-price">{p.setup}</div>
                <div className="pr-pkg-unit">setup</div>
                <div className="pr-pkg-mo">{p.mo}</div>
                <div className="pr-pkg-what">{p.what}</div>
                <div className="pr-pkg-who">{p.who}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison matrix ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">At a glance</div>
          <h2 className="pr-title reveal" data-delay="1">What each package can include</h2>

          <div className="pr-table-wrap reveal" data-delay="2">
            <table className="pr-table">
              <thead>
                <tr>
                  <th scope="col">Capability</th>
                  {TIERS.map(t => <th key={t} scope="col">{t}</th>)}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map(row => (
                  <tr key={row.cap}>
                    <td>{row.cap}</td>
                    {row.vals.map((v, i) => <td key={i}>{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pr-matrix-cards">
            {MATRIX.map(row => (
              <div className="pr-mc" key={row.cap}>
                <div className="pr-mc-cap">{row.cap}</div>
                {row.vals.map((v, i) => (
                  <div className="pr-mc-row" key={i}>
                    <span>{TIERS[i]}</span><span>{v}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">Common solutions</div>
          <h2 className="pr-title reveal" data-delay="1">Services available within the packages</h2>
          <div className="pr-solutions">
            {SOLUTIONS.map(s => (
              <div className="pr-sol reveal" key={s.num}>
                <div className="pr-sol-num">{s.num}</div>
                <div>
                  <div className="pr-sol-name">{s.name}</div>
                  <p className="pr-sol-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Divider band ── */}
      <div className="pr-band">
        <div className="pr-band-inner">
          <div>
            <h2 className="pr-band-title">Package details &amp; optional add-ons</h2>
            <p className="pr-band-sub">
              A clear menu of what can be built, managed and expanded over time.
            </p>
          </div>
          <div className="pr-band-mark">Precision Martech LLC</div>
        </div>
      </div>

      <div className="pr-inner">
        {/* ── How pricing works ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">How pricing works</div>
          <h2 className="pr-title reveal" data-delay="1">
            Setup fees build the system. Monthly fees keep it running.
          </h2>
          <div className="pr-model">
            {MODEL.map(m => (
              <div key={m.label}
                   className={`pr-model-card reveal${m.note ? ' pr-model-card--note' : ''}`}>
                <div className="pr-model-label">{m.label}</div>
                <p className="pr-model-body">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">Package scope</div>
          <h2 className="pr-title reveal" data-delay="1">Typical deliverables by level</h2>
          <div className="pr-deliverables">
            {DELIVERABLES.map(d => (
              <div key={d.name}
                   className={`pr-del reveal${d.featured ? ' pr-del--featured' : ''}`}>
                <div className="pr-del-head">
                  <span className="pr-del-name">{d.name}</span>
                  <span className="pr-del-from">{d.from}</span>
                </div>
                <ul className="pr-del-list">
                  {d.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Add-ons ── */}
        <section className="pr-section">
          <div className="pr-eyebrow reveal">Build your solution</div>
          <h2 className="pr-title reveal" data-delay="1">Optional add-ons</h2>
          <div className="pr-addons">
            {ADDONS.map(a => (
              <div className="pr-addon reveal" key={a.name}>
                <span className="pr-addon-name">{a.name}</span>
                <span className="pr-addon-price">{a.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="pr-cta reveal">
          <div>
            <div className="pr-cta-text">Ready to map your workflow?</div>
            <div className="pr-cta-meta">
              <a href="mailto:jackc@precisionmartech.com">jackc@precisionmartech.com</a>
              {' · '}
              <a href="tel:+18186310588">818-631-0588</a>
            </div>
          </div>
          <Link className="pr-cta-btn" to="/#contact">Start a project</Link>
        </div>

        <div className="pr-fineprint">
          Precision Martech LLC · Business Automation Services
        </div>
      </div>
    </div>
  );
}
