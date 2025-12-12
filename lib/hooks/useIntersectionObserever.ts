import { useEffect, useRef, useState } from 'react';

/**
 * A lightweight IntersectionObserver hook
 *
 * Defaults to a 20% visibility threshold so the component is considered visible
 * only when at least 20% is on screen (i.e., not just on entry).
 *
 * @param options Optional IntersectionObserverInit options (root, rootMargin, threshold)
 * @param minVisibleRatio Minimum intersectionRatio at which the item should be considered visible (0..1). If provided, overrides options.threshold when a number is given.
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit,
  minVisibleRatio?: number,
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState<number>(0);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // choose the threshold to evaluate 'visible' by priority:
    // 1) explicit minVisibleRatio
    // 2) options.threshold (if number)
    // 3) default 0.2
    const thresholdValue =
      typeof minVisibleRatio === 'number'
        ? Math.max(0, Math.min(1, minVisibleRatio))
        : typeof options?.threshold === 'number'
          ? Math.max(0, Math.min(1, options!.threshold as number))
          : 0.2;

    // Ensure we pass some thresholds array or number to the native API
    const observerOptions: IntersectionObserverInit = {
      ...options,
      // If caller provided threshold array, keep it — otherwise, we use our thresholdValue
      threshold: options?.threshold ?? thresholdValue,
    };

    const observer = new IntersectionObserver(([e]) => {
      setEntry(e);
      setIntersectionRatio(e.intersectionRatio);
      setIsVisible(e.intersectionRatio >= thresholdValue);
    }, observerOptions);

    observer.observe(ref.current);

    return () => observer.disconnect();
    // NOTE: watch options (object identity) could cause re-creation each render —
    // consumers may want to memoize this options object.
  }, [options, minVisibleRatio]);

  return { ref, isVisible, intersectionRatio, entry } as const;
}
