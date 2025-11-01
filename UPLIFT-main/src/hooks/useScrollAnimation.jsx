import { useState, useEffect, useRef } from 'react';

/**
 * A custom hook to detect when an element scrolls into view.
 * @param {object} options - IntersectionObserver options (e.g., threshold)
 * @returns {[React.RefObject, boolean]} - A ref to attach to the element and a boolean indicating if it's visible.
 */
export const useScrollAnimation = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null); // The ref we'll attach to the element

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is in view, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // Stop observing
        }
      },
      options
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [options]);

  // Return the ref and the visibility state
  return [elementRef, isVisible];
};