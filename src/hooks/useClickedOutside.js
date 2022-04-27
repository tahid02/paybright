const { useEffect, useRef } = require('react');

export default function useClickedOutside(outSideClicked) {
  const refElement = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refElement?.current?.contains(event.target)) {
        // if (event?.path[0]?.tagName === 'svg') return;
        outSideClicked();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return { refElement };
}
