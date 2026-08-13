import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './email-portfolio.css';

type EmailExample = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
};

const EMAIL_EXAMPLES: EmailExample[] = [
  { src: '/images/email-portfolio/grandpa-gus-mice-subscription.jpg', alt: 'Grandpa Gus mice repellent subscription email campaign screenshot' },
  { src: '/images/email-portfolio/grandpa-gus-subscribe-save.jpg', alt: 'Grandpa Gus subscribe and save email campaign screenshot' },
  { src: '/images/email-portfolio/sutera-cyber-week.jpg', alt: 'Sutera Cyber Week sale email campaign screenshot' },
  { src: '/images/email-portfolio/leonard-black-friday.jpg', alt: 'Leonard Black Friday extended sale email campaign screenshot' },
  { src: '/images/email-portfolio/leonard-rent-to-own.jpg', alt: 'Leonard rent to own trailers and sheds email campaign screenshot' },
  { src: '/images/email-portfolio/leonard-clearance-caps.jpg', alt: 'Leonard clearance truck caps email campaign screenshot' },
];

const AUTO_ADVANCE_MS = 2800;
const RECOVERY_MS = 5200;

function mod(value: number, length: number) {
  return ((value % length) + length) % length;
}

function PortfolioCarousel() {
  const [active, setActive] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const touchStart = useRef<number | null>(null);
  const recoveryTimer = useRef<number | null>(null);

  const availableExamples = useMemo(
    () => EMAIL_EXAMPLES.filter((example) => !missing[example.src]),
    [missing],
  );
  const safeActive = availableExamples.length > 0 ? active % availableExamples.length : 0;

  useEffect(() => {
    if (isInteracting || availableExamples.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => mod(current + 1, availableExamples.length));
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [availableExamples.length, isInteracting]);

  const pauseThenRecover = () => {
    setIsInteracting(true);
    if (recoveryTimer.current) {
      window.clearTimeout(recoveryTimer.current);
    }
    recoveryTimer.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, RECOVERY_MS);
  };

  const go = (direction: -1 | 1) => {
    if (availableExamples.length < 2) return;
    pauseThenRecover();
    setActive((current) => mod(current + direction, availableExamples.length));
  };

  const onTouchEnd = (clientX: number) => {
    if (touchStart.current === null) return;
    const delta = clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) < 36) return;
    go(delta > 0 ? -1 : 1);
  };

  if (availableExamples.length === 0) {
    return (
      <div className="ep-empty">
        <div className="ep-empty-kicker">Real screenshots needed</div>
        <h2>Add Jack's exported email PNGs to complete the preview.</h2>
        <p>
          The carousel is wired for the supplied email screenshots only. Place the approved images in
          <span> public/images/email-portfolio/</span> using the filenames in the page data.
        </p>
      </div>
    );
  }

  return (
    <div
      className="ep-carousel"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={(event) => {
        pauseThenRecover();
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      aria-label="Email marketing portfolio carousel"
    >
      <div className="ep-stage">
        <div className="ep-stage-shadow" aria-hidden="true" />
        {availableExamples.map((example, index) => {
          const offset = mod(index - safeActive, availableExamples.length);
          const signedOffset = offset > availableExamples.length / 2 ? offset - availableExamples.length : offset;
          const absOffset = Math.abs(signedOffset);
          const visible = absOffset <= 2;

          return (
            <button
              className="ep-shot"
              data-active={signedOffset === 0}
              data-visible={visible}
              data-fit={example.fit ?? 'cover'}
              key={example.src}
              style={{ '--offset': signedOffset, '--abs-offset': absOffset } as CSSProperties}
              onClick={() => {
                pauseThenRecover();
                setActive(index);
              }}
              aria-label={`View ${example.alt}`}
            >
              <img
                src={example.src}
                alt={example.alt}
                onError={() => setMissing((current) => ({ ...current, [example.src]: true }))}
              />
            </button>
          );
        })}
      </div>
      <div className="ep-controls">
        <button type="button" className="ep-arrow" onClick={() => go(-1)} aria-label="Previous email">
          <ChevronLeft size={22} strokeWidth={1.8} />
        </button>
        <div className="ep-progress" aria-hidden="true">
          {availableExamples.map((example, index) => (
            <span key={example.src} data-active={index === safeActive} />
          ))}
        </div>
        <button type="button" className="ep-arrow" onClick={() => go(1)} aria-label="Next email">
          <ChevronRight size={22} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

export default function EmailPortfolio() {
  return (
    <main className="email-portfolio-page">
      <section className="ep-scene">
        <div className="ep-scene-inner">
          <div className="ep-top">
            <img
              className="ep-logo"
              src="/images/precision-martech-logo.png"
              alt="Precision Martech"
            />

            <div className="ep-copy">
              <div className="ep-eyebrow">Email marketing portfolio</div>
              <h1 className="ep-title">
                Great emails.<br />
                Better <span>results.</span>
              </h1>
              <div className="ep-subtitle">Strategy. Design. Copy. Klaviyo execution.</div>
              <p className="ep-lede">
                A selection of real email campaigns created for ecommerce and retail brands. Built to engage, build trust, and drive action.
              </p>
            </div>

            <div className="ep-side-mark">
              Smarter marketing.<br />
              Better results.
            </div>
          </div>

          <h2 id="email-showcase-title" className="ep-sr-only">Selected email campaigns</h2>
          <PortfolioCarousel />

          <div className="ep-cta-panel">
            <div>
              <div className="ep-panel-kicker">Ready to improve your email performance?</div>
              <h2>Let's turn your emails into revenue.</h2>
              <p>Strategic. Creative. Results-driven.</p>
            </div>
            <Link to="/#contact" className="ep-panel-button">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="ep-proof" aria-labelledby="email-showcase-title">
        <div className="ep-proof-inner">
          <div>
            <div className="ep-eyebrow">Selected emails</div>
            <h2 className="ep-proof-title">Real campaigns. Real brands. No filler.</h2>
          </div>
          <p>One email marketing page, no client tabs, no separate case-study pages, no made-up numbers.</p>
        </div>
      </section>
    </main>
  );
}
