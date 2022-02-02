import React, { useContext } from 'react';
import Image from 'next/image';
import bgImg from '../../../assets/images/about-bg.jpg';
import * as S from './hero.style';
import { useTheme } from 'styled-components';
import Button from '../../../components/buttons/Button';
import ArrowIcon from '../../../assets/icons/hero_btn_1.svg';
import useSmall from '../../../hooks/useSmall';
import Access_Context from '../../../context/access_context/Access_Context';

const Hero = () => {
  const theme = useTheme();
  const { toggleAccess: action } = useContext(Access_Context);

  const lottieStyles = {
    width: '60%',
    height: '110%',
    position: 'absolute',
    right: '0vw',
    bottom: '-16vh',
    zIndex: 3,
  };

  //  use small hook to check screen size
  const Small = useSmall();

  return (
    <S.Container theme={theme}>
      <Image src={bgImg} alt='' layout='fill' className='img' />

      {Small ? (
        ''
      ) : (
        <lottie-player
          src='https://assets2.lottiefiles.com/packages/lf20_y5kf5v3b.json'
          background='transparent'
          speed='.2'
          style={{ ...lottieStyles }}
          loop
          autoplay
        ></lottie-player>
      )}

      {/* ----- title ----- */}
      <S.TextArea>
        <S.HeroTitle>
          Get to know more
          <br />
          about us at <br /> <b>Transol</b>
        </S.HeroTitle>
        <S.HeroSubText font={theme.fonts.sc_font}>
          The company that puts custoners ahead of all decisions regardless of
          roles and status.
        </S.HeroSubText>
        <Button
          variant='main'
          text='Get early access'
          icon={ArrowIcon}
          onClick={action}
        />
      </S.TextArea>
    </S.Container>
  );
};

export default Hero;
