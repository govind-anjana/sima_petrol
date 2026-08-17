import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element enters the viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {number} [options.threshold=0.15] - Visibility threshold
 * @param {string} [options.rootMargin='0px'] - Root margin
 * @param {boolean} [options.triggerOnce=true] - Trigger only once
 * @returns {[React.RefObject, boolean]} [ref, isVisible]
 */
function useInView({ threshold = 0.15, rootMargin = '0px', triggerOnce = true } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

export default useInView;
