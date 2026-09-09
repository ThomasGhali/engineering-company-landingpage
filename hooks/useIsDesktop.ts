import { useSyncExternalStore } from 'react';

const QUERY = '(min-width: 768px)';

function subscribe(callback: () => void) {
  const match = window.matchMedia(QUERY);
  match.addEventListener('change', callback);
  return () => match.removeEventListener('change', callback);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

// If you're on Next.js (or any SSR), you need this — window doesn't exist on the server.
function getServerSnapshot(): boolean {
  return false;
}

export default function useIsDesktop(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
