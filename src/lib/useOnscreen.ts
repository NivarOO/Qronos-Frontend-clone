"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is inside the viewport so canvas loops
 * can pause while offscreen. Starts active (visible) to avoid a flash
 * of missing backdrop on first paint.
 */
export function useOnscreen<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [onscreen, setOnscreen] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setOnscreen(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, onscreen };
}
