export const measureRenderTime = async (fn: () => void): Promise<number> => {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
};

export const measureMemoryUsage = (): number | null => {
  if ('memory' in performance) {
    return (performance as any).memory.usedJSHeapSize;
  }
  return null;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};
