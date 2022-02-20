import { useState, useEffect } from 'react';

const useScreen = () => {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleScreen() {
      if (window.innerWidth <= 720) setIsMobile(() => true);
      if (window.innerWidth > 720) setIsMobile(() => false);
    }
    window.addEventListener('load', handleScreen);
    window.addEventListener('resize', handleScreen);
    window.addEventListener('focus', handleScreen);

    //   cleanup
    return () => {
      window.removeEventListener('load', handleScreen);
      window.removeEventListener('resize', handleScreen);
      window.removeEventListener('focus', handleScreen);
    };
  });

  return IsMobile;
};

export default useScreen;
