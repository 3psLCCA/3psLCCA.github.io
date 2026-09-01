import {useEffect, useState} from 'react';

export type DetectedPlatform = 'windows' | 'linux' | 'android' | 'other';

function detectPlatform(): DetectedPlatform {
  if (typeof navigator === 'undefined') return 'other';
  const ua = `${navigator.userAgent} ${navigator.platform ?? ''}`.toLowerCase();
  // Check android before windows/linux - Android UAs also contain "linux".
  if (ua.includes('android')) return 'android';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';
  return 'other';
}

export function usePlatform(): DetectedPlatform {
  const [platform, setPlatform] = useState<DetectedPlatform>('other');
  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);
  return platform;
}
