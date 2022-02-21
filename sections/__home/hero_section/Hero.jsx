import React, { useContext } from 'react';
import * as S from './Hero_Style';
import Image from 'next/image';
import Button from '../../../components/buttons/Button';
import theme from '../../../components/Theme/themeObj';
import Icon_1 from '../../../assets/icons/hero_btn_1.svg';
import Icon_2 from '../../../assets/icons/hero_btn_2.svg';
import bgImg from '/assets/images/city.jpg';
import HeroTag from './HeroTag';
import useSmall from '../../../hooks/useSmall';
import Access_Context from '../../../context/access_context/Access_Context';

const Hero = () => {
  const Small = useSmall();
  const { actions } = useContext(Access_Context);

  // lottie animation settings
  const lottieStyles = {
    width: '20vw',
    height: '60vh',
    position: 'absolute',
    right: '15vw',
    bottom: '4vh',
  };

  const scrollStyles = {
    width: '8vw',
    height: '10vh',
    position: 'absolute',
    right: '0vw',
    bottom: '-10vh',
  };

  return (
    <S.Container img={bgImg}>
      {/* ----- Title ----- */}
      <S.HeroTitle>
        Get a repair <br /> specialist
        {Small ? (
          ' Anywhere'
        ) : (
          <b style={{ color: theme.colors.main }}>
            {/* <HeroTag /> */}
            {' Anywhere'}
          </b>
        )}
        <br /> in a few minutes
      </S.HeroTitle>

      {/* ----- Sub-text ----- */}
      <S.HeroSubText font={theme.fonts.sc_font}>
        Get access to automobile repair specialists <br /> within a 30km radius
        at affordable prices.
      </S.HeroSubText>
      <Image src={bgImg} alt='' className='img' layout='fill' />

      {/* ----- Buttons section ----- */}
      <S.ButtonSection>
        <Button
          variant='main'
          text='Get early access'
          icon={Icon_1}
          onClick={() => actions.toggleAccess()}
        />
        <Button
          variant='dark'
          text='Watch video'
          icon={Icon_2}
          onClick={() => actions.toggleVid()}
        />
      </S.ButtonSection>

      {/* lottie animation */}
      {Small ? (
        ''
      ) : (
        <lottie-player
          src='https://assets3.lottiefiles.com/packages/lf20_3Dymt9.json'
          background='transparent'
          speed='1'
          style={{ ...lottieStyles }}
          loop
          autoplay
        ></lottie-player>
      )}
      <lottie-player
        src='https://assets7.lottiefiles.com/packages/lf20_b2oxjsii.json'
        background='transparent'
        speed='1'
        style={{ ...scrollStyles }}
        loop
        autoplay
      ></lottie-player>
    </S.Container>
  );
};

export default Hero;
