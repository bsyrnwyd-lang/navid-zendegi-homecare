import { useCallback, useRef } from 'react';

// Cache to avoid prefetching the same route twice
const prefetchedRoutes = new Set<string>();

export function usePrefetch() {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefetchRoute = useCallback((path: string) => {
    // Don't prefetch if already done
    if (prefetchedRoutes.has(path)) return;

    // Add to prefetched set
    prefetchedRoutes.add(path);

    // Create a prefetch link
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = path;
    link.as = 'document';
    document.head.appendChild(link);
  }, []);

  const onMouseEnter = useCallback((path: string) => {
    // Delay prefetch slightly to avoid unnecessary loads on quick hovers
    timeoutRef.current = setTimeout(() => {
      prefetchRoute(path);
    }, 100);
  }, [prefetchRoute]);

  const onMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return { prefetchRoute, onMouseEnter, onMouseLeave };
}

export default usePrefetch;
