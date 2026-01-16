import { useState, useRef, useEffect, useCallback } from 'react';

export default function useImageIndexloop(imagesCount: number, delay: number) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const startTimeRef = useRef<number>(performance.now());
  const animationFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);

  const tick = useCallback(() => {
    if (isPausedRef.current) return;

    const elapsed = performance.now() - startTimeRef.current;
    const newProgress = (elapsed / delay) * 100;

    setProgress(newProgress);

    if (elapsed >= delay) {
      setImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
      startTimeRef.current = performance.now();
      setProgress(0);
    }

    animationFrameRef.current = requestAnimationFrame(tick);
  }, [delay, imagesCount]);

  const startAnimation = useCallback(() => {
    isPausedRef.current = false;
    startTimeRef.current = performance.now();
    setProgress(0);
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const nextImage = useCallback(() => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
    startTimeRef.current = performance.now();
    setProgress(0);
  }, [imagesCount]);

  useEffect(() => {
    startAnimation();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [startAnimation]);

  return {
    imageIndex,
    progress,
    nextImage,
  };
}
