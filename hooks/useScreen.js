import { useState, useEffect } from 'react';

const useScreen = () => {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleScreen() {
      if (window.innerWidth <= 600) setIsMobile(() => true);
      if (window.innerWidth > 600) setIsMobile(() => false);
    }
    window.addEventListener('load', handleScreen);
    window.addEventListener('resize', handleScreen);

    //   cleanup
    return () => {
      window.removeEventListener('load', handleScreen);
      window.removeEventListener('resize', handleScreen);
    };
  });

  return IsMobile;
};

export default useScreen;
