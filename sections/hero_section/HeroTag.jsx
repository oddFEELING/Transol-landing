import React, { useEffect, useState } from 'react';
import TypeIt from 'typeit-react';

const HeroTag = () => {
  const [IsVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  //-->  type it options
  const TypeOptions = {
    speed: 60,
    cursorChar: '',
    lifeLike: true,
    loop: true,
    waitUntilVisible: true,
  };
  return (
    <>
      {IsVisible ? (
        <TypeIt
          options={TypeOptions}
          getAfterInit={(instance) => {
            instance
              .type(' ')
              .type('Anywhere')
              .pause(1500)
              .delete(5)
              .type('time')
              .pause(1500)
              .delete(7)
              .type('Everywhere')
              .pause(1500)
              .delete(5)
              .type('Time')
              .pause(1300);
          }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default HeroTag;
