import React from 'react';
import * as S from './Hero_Style';
import Button from '../../components/buttons/Button';
import theme from '../../components/Theme/themeObj';
import Icon_1 from '../../assets/icons/hero_btn_1.svg';
import Icon_2 from '../../assets/icons/hero_btn_2.svg';

const Hero = () => {
  return (
    <S.Container>
      {/* ----- Title ----- */}
      <S.HeroTitle>
        Get repair <br /> specialists anywhere in few minutes
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
