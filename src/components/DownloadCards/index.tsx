import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import type {ReleaseData} from '../../../plugins/latest-release-plugin';
import {usePlatform, type DetectedPlatform} from '../../utils/usePlatform';
import styles from './styles.module.css';

function formatSize(bytes: number): string {
  return `${Math.round(bytes / 1024 / 1024)} MB`;
}

type Platform = 'windows' | 'linux' | 'conda';

// Conda is the catch-all download for anything that isn't Windows/Linux
// (e.g. macOS), matching the 'other' bucket from platform detection.
const DETECTED_MATCH: Record<Platform, DetectedPlatform> = {
  windows: 'windows',
  linux: 'linux',
  conda: 'other',
};

const CARDS: {platform: Platform; label: string; detail: string; icon: string}[] = [
  {platform: 'windows', label: 'Windows', detail: '.exe installer', icon: '/img/platforms/windows.svg'},
  {platform: 'linux', label: 'Linux', detail: '.sh installer', icon: '/img/platforms/linux.svg'},
  {platform: 'conda', label: 'Conda', detail: '.conda package · all platforms', icon: '/img/platforms/anaconda.svg'},
];

export default function DownloadCards(): ReactNode {
  const release = usePluginData('latest-release-plugin') as ReleaseData;
  const detected = usePlatform();
  const recommendedPlatform = CARDS.find(
    (card) => DETECTED_MATCH[card.platform] === detected,
  )?.platform;
  const [selected, setSelected] = useState<Platform | null>(null);
  const active = selected ?? recommendedPlatform;

  return (
    <div className={styles.grid}>
      {CARDS.map((card) => {
        const asset = release.assets[card.platform];
        const recommended = DETECTED_MATCH[card.platform] === detected;
        const isSelected = active === card.platform;
        return (
          <div
            key={card.platform}
            role="button"
            tabIndex={0}
            onClick={() => setSelected(card.platform)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelected(card.platform);
              }
            }}
            className={[styles.card, isSelected && styles.cardSelected]
              .filter(Boolean)
              .join(' ')}>
            {recommended && <span className={styles.badge}>Recommended</span>}
            <div className={styles.iconWrap}>
              <img src={card.icon} alt="" className={styles.icon} />
            </div>
            <p className={styles.label}>{card.label}</p>
            <p className={styles.detail}>
              {card.detail} · ~{formatSize(asset.size)}
            </p>
            {isSelected && (
              <Link
                to={asset.url}
                onClick={(e) => e.stopPropagation()}
                className={`button button--primary ${styles.button}`}>
                Download {release.tag}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
