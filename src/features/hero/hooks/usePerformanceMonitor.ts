import { useEffect, useRef } from "react";

export const usePerformanceMonitor = (componentName: string) => {
  const renderStartTime = useRef<number | undefined>(undefined);
  const renderCount = useRef(0);

  useEffect(() => {
    renderStartTime.current = performance.now();
    renderCount.current += 1;
  });

  useEffect(() => {
    if (renderStartTime.current) {
      const renderTime = performance.now() - renderStartTime.current;
      
      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Performance] ${componentName}:`, {
          renderTime: `${renderTime.toFixed(2)}ms`,
          renderCount: renderCount.current,
        });
      }

      // Send metrics to analytics in production (if needed)
      if (process.env.NODE_ENV === 'production' && renderTime > 16) {
        // Log slow renders (> 16ms for 60fps)
        console.warn(`[Performance Warning] ${componentName} slow render: ${renderTime.toFixed(2)}ms`);
      }
    }
  });

  return {
    renderCount: renderCount.current,
  };
};
