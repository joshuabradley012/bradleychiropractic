import { useEffect, useRef } from 'react';

const useScript = (url, dataId) => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.setAttribute('data-id', dataId);
    ref.current.appendChild(script);

    return () => {
      ref.current.removeChild(script);
    };
  }, [url]);

  return ref;
};

export default useScript;