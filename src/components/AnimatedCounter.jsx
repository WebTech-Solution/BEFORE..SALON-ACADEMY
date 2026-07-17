import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
          let start = 0;
          const end = parseInt(target, 10);
          if (isNaN(end)) {
            // If it's a floating rating like 4.8
            const floatEnd = parseFloat(target);
            if (isNaN(floatEnd)) return;
            
            const startTime = performance.now();
            const updateFloatCount = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const easeProgress = progress * (2 - progress);
              const current = (easeProgress * floatEnd).toFixed(1);
              setCount(current);
              if (progress < 1) {
                requestAnimationFrame(updateFloatCount);
              } else {
                setCount(floatEnd);
              }
            };
            requestAnimationFrame(updateFloatCount);
            return;
          }
          
          const startTime = performance.now();
          
          const updateCount = (now) => {
            const timeElapsed = now - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.floor(easeProgress * end);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, duration, hasRun]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
