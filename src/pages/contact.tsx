import React from 'react';
import Layout from '@theme/Layout';
import Obfuscate from 'react-obfuscate';
import styles from './contact.module.css';

// TODO: replace with the real email.
const EMAIL = '[todo]@example.com';

const contactDetailsBeforeEmail = [
  {
    icon: '🏛️',
    label: 'Organisation',
    value: 'Osdag, FOSSEE, IIT Bombay',
    href: null,
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Department of Civil Engineering, IIT Bombay, Powai, Mumbai – 400076, India',
    href: 'https://maps.google.com/?q=IIT+Bombay,+Powai,+Mumbai',
  },
];

const contactDetailsAfterEmail = [
  {
    // TODO: add real website.
    icon: '🌐',
    label: 'Website',
    value: '[todo]',
    href: null,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Osdag on LinkedIn',
    href: 'https://in.linkedin.com/company/osdag',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/3psLCCA',
    href: 'https://github.com/3psLCCA',
  },
];

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href: string | null;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardContent}>
        <span className={styles.cardLabel}>{label}</span>
        {href ? (
          <a
            href={href}
            className={styles.cardValue}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <span className={styles.cardValue}>{value}</span>
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
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Have questions about 3psLCCA, want to collaborate, or need
              support? Reach out to the team at IIT Bombay.
            </p>
          </div>

          <div className={styles.grid}>
            {contactDetailsBeforeEmail.map((detail) => (
              <ContactCard key={detail.label} {...detail} />
            ))}

            <div className={styles.card}>
              <div className={styles.cardIcon}>📧</div>
              <div className={styles.cardContent}>
                <span className={styles.cardLabel}>Email</span>
                <span className={styles.cardValue}>
                  <Obfuscate email={EMAIL} />
                </span>
              </div>
            </div>

            {contactDetailsAfterEmail.map((detail) => (
              <ContactCard key={detail.label} {...detail} />
            ))}
          </div>

          <div className={styles.note}>
            <p>
              For bug reports and feature requests, please open an issue on{' '}
              <a
                href="https://github.com/3psLCCA/3psLCCA-gui/issues"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
