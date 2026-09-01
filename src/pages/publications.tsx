import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {publications, type PublicationStatus} from '../data/publications';
import styles from './publications.module.css';

function statusBadgeClass(status?: PublicationStatus): string {
  if (status === 'Accepted') return styles.badgeSuccess;
  if (status === 'Submitted') return styles.badgeWarning;
  return '';
}

export default function PublicationsPage(): React.ReactElement {
  return (
    <Layout
      title="Publications"
      description="Peer-reviewed research underpinning the 3PS-LCC methodology.">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Publications</h1>
            <p className={styles.subtitle}>
              The 3PS-LCC framework is grounded in peer-reviewed research. All
              publications underpinning the methodology are listed below.
            </p>
          </div>

          <div className={styles.list}>
            {publications.map((pub) => (
              <div key={pub.title} className={styles.card}>
                <div className={styles.badges}>
                  <span
                    className={`${styles.badge} ${
                      pub.type === 'Journal Article' ? styles.badgePrimary : ''
                    }`}>
                    {pub.type}
                  </span>
                  {pub.status && (
                    <span className={`${styles.badge} ${statusBadgeClass(pub.status)}`}>
                      {pub.status}
                    </span>
                  )}
                </div>
                <div className={styles.pubTitle}>{pub.title}</div>
                <div className={styles.authors}>{pub.authors}</div>
                <div className={styles.venue}>{pub.venue}</div>
                {pub.link && (
                  <Link to={pub.link} className={styles.link}>
                    View publication →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
