import { useState, useRef, useEffect, useCallback } from 'react';

export default function useImageIndexloop(imagesCount: number, delay: number) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const elapsedTimeRed = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const pausePlay = useCallback(() => {
    setIsPaused((prev) => {
      if (prev) {
        // Was paused, unpausing
        startTimeRef.current = performance.now() - elapsedTimeRed.current;
      }
      return !prev;
    });
  }, []);

  const nextImage = useCallback(() => {
    setImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
    startTimeRef.current = performance.now();
    elapsedTimeRed.current = 0;
    setProgress(0);
  }, [imagesCount]);

  useEffect(() => {
    // Initialize start time on first effect run
    if (startTimeRef.current === 0) {
      startTimeRef.current = performance.now();
    }

    const tick = () => {
      if (isPaused) return;

      elapsedTimeRed.current = performance.now() - startTimeRef.current;
      const newProgress = (elapsedTimeRed.current / delay) * 100;

      setProgress(newProgress);

      if (elapsedTimeRed.current >= delay) {
        setImageIndex((prevIndex) => (prevIndex + 1) % imagesCount);
        startTimeRef.current = performance.now();
        elapsedTimeRed.current = 0;
        setProgress(0);
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    if (!isPaused) {
      animationFrameRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, delay, imagesCount]);

  return {
    imageIndex,
    progress,
    nextImage,
    isPaused,
    pausePlay,
  };
}
