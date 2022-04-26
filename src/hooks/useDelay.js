import { useEffect, useState } from 'react';

const useDelay = (delay) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const delayTime = setTimeout(() => {
      setLoading(true);
    }, delay);
    return () => clearTimeout(delayTime);
  }, [delay]);
  return { loading };
};

export default useDelay;
