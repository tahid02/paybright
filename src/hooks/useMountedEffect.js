const { useRef, useEffect } = require('react');

const useMountedEffect = (func, dependencies) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, dependencies);
};

export default useMountedEffect;
