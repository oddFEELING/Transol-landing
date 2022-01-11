import React, { useEffect, useState } from 'react';
import * as S from './Hero_Style';
import Button from '../../components/buttons/Button';
import theme from '../../components/Theme/themeObj';
import Icon_1 from '../../assets/icons/hero_btn_1.svg';
import Icon_2 from '../../assets/icons/hero_btn_2.svg';
import HeroTag from './HeroTag';
import { HdrEnhancedSelectSharp } from '@mui/icons-material';

const Hero = () => {
  const [Small, setSmall] = useState(true);

  useEffect(() => {
    function handleScreen() {
      if (window.innerWidth < 1200) setSmall(true);
      if (window.innerWidth > 1200) setSmall(false);
    }
    window.addEventListener('resize', handleScreen);
    window.addEventListener('load', handleScreen);

    return () => {
      window.removeEventListener('resize', handleScreen);
      window.removeEventListener('resize', handleScreen);
    };
  });

  return (
    <S.Container>
      {/* ----- Title ----- */}
      <S.HeroTitle>
        Get a repair <br /> specialist
        {Small ? (
          ' Anywhere'
        ) : (
          <b style={{ color: theme.colors.main }}>
            <HeroTag />
          </b>
        )}
        <br /> in few minutes
      </S.HeroTitle>

      {/* ----- Sub-text ----- */}
      <S.HeroSubText font={theme.fonts.sc_font}>
        Get access to automobile repair specialists <br /> within a 30km radius
        at affordable prices.
      </S.HeroSubText>

      {/* ----- Buttons section ----- */}
      <S.ButtonSection>
        <Button variant='main' text='Get early access' icon={Icon_1} />
        <Button variant='dark' text='Watch video' icon={Icon_2} />
      </S.ButtonSection>
    </S.Container>
  );
};

export default Hero;
