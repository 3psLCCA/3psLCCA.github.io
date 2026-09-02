import React from 'react';
import Layout from '@theme/Layout';
import Obfuscate from 'react-obfuscate';
import styles from './contact.module.css';

const EMAIL = 'osdag@fossee.in';

// Inline SVG icons — no extra dependency needed.
function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 22V12h6v10M9 7h.01M15 7h.01M9 12h.01M15 12h.01" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactElement> = {
  Organisation: <IconBuilding />,
  Address: <IconPin />,
  Email: <IconMail />,
  Website: <IconGlobe />,
  LinkedIn: <IconLinkedIn />,
  GitHub: <IconGitHub />,
};

const contactDetailsBeforeEmail = [
  {
    label: 'Organisation',
    value: 'Osdag, FOSSEE, IIT Bombay',
    href: null,
  },
  {
    label: 'Address',
    value: 'Structural Safety, Risk and Reliability Lab, 5th Floor, Victor Menezes Convention Centre, Indian Institute of Technology Bombay, Powai, Mumbai 400076, India',
    href: 'https://maps.app.goo.gl/ppw7TRbMudnyukZ49',
  },
];

const contactDetailsAfterEmail = [
  {
    label: 'Website',
    value: '3pslcca.github.io',
    href: 'https://3pslcca.github.io/',
  },
  {
    label: 'LinkedIn',
    value: 'Osdag on LinkedIn',
    href: 'https://in.linkedin.com/company/osdag',
  },
  {
    label: 'GitHub',
    value: 'github.com/3psLCCA',
    href: 'https://github.com/3psLCCA',
  },
];

function ContactCard({
  label,
  value,
  href,
  children,
}: {
  label: string;
  value?: string;
  href?: string | null;
  children?: React.ReactNode;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{ICON_MAP[label]}</div>
      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>{label}</span>
        {children ?? (
          href ? (
            <a
              href={href}
              className={styles.cardValue}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            <span className={styles.cardValue}>{value}</span>
          )
        )}
      </div>
    </div>
  );
}

export default function ContactPage(): React.ReactElement {
  return (
    <Layout
      title="Contact Us"
      description="Get in touch with the 3psLCCA team at IIT Bombay.">
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroInner}>

            {/* ── Left panel ── */}
            <div className={styles.heroLeft}>
              <p className={styles.eyebrow}>Get in touch</p>
              <h1 className={styles.title}>Contact Us</h1>
              <p className={styles.subtitle}>
                Have questions about 3psLCCA, want to collaborate, or need
                support? Reach out to the team at IIT Bombay — we're happy
                to hear from you.
              </p>
              <hr />
              <div className={styles.bugNote}>
                <strong>Bug reports &amp; feature requests</strong> are best
                handled on{' '}
                <a
                  href="https://github.com/3psLCCA/3psLCCA-gui/issues"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitHub Issues ↗
                </a>{' '}
                so the whole team can track and respond.
              </div>
            </div>

            {/* ── Right panel ── */}
            <div className={styles.heroRight}>
              <p className={styles.gridHeading}>Contact details</p>
              <div className={styles.grid}>
                {contactDetailsBeforeEmail.map((d) => (
                  <ContactCard key={d.label} {...d} />
                ))}

                <ContactCard label="Email">
                  <span className={styles.cardValue}>
                    <Obfuscate email={EMAIL} />
                  </span>
                </ContactCard>

                {contactDetailsAfterEmail.map((d) => (
                  <ContactCard key={d.label} {...d} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}

