import { useLayoutEffect, useState, useContext } from 'react';
import Nav_Context from '../context/nav_context/nav_context';

function useSmall() {
  const [Small, setSmall] = useState(true);
  const { state } = useContext(Nav_Context);

  // Effect 1
  useLayoutEffect(() => {
    function handleScreen() {
      if (window.innerWidth < 1000) setSmall(() => true);
      if (window.innerWidth > 1000) setSmall(() => false);
    }
    window.addEventListener('resize', handleScreen);
    window.addEventListener('load', handleScreen);

    return () => {
      window.removeEventListener('resize', handleScreen);
      window.removeEventListener('load', handleScreen);
    };
  }, [state]);

  // Effect 2
  useLayoutEffect(() => {
    if (window.innerWidth < 1000) setSmall(() => true);
    if (window.innerWidth > 1000) setSmall(() => false);
  }, [state]);

  // return
  return Small;
}

export default useSmall;
