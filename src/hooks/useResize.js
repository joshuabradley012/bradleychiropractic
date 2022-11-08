import { useEffect } from 'react';

const useResize = callback => {
  useEffect(() => {
    callback();
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, [callback]);
};

export default useResize;
