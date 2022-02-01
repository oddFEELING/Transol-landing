import React from 'react';
import Image from 'next/image';
import GarageImg from '../../../assets/images/garage-img.jpg';
import * as S from './Hero.style';
import useSmall from '../../../hooks/useSmall';
import BtnIcon from '../../../assets/icons/hero_btn_1.svg';
import Button from '../../../components/buttons/Button';

const Hero = () => {
  const small = useSmall();

  // lottie animation settings
  const lottieStyles = {
    width: '65vw',
    height: '80vh',
    position: 'absolute',
    right: '0',
    bottom: '-13vh',
  };
  return (
    <S.Container>
      <Image src={GarageImg} alt='' layout='fill' className='img' />
      {!small ? (
        <lottie-player
          src=' https://assets8.lottiefiles.com/packages/lf20_1jibotah.json'
          background='transparent'
          speed='.6'
          style={{ ...lottieStyles }}
          loop
          autoplay
        ></lottie-player>
      ) : (
        ''
      )}

      <S.HeroTitle>
        At TRANSOL We <br />
        offer a wide range <br /> of <b>services</b>
      </S.HeroTitle>
      <S.HeroSubText>
        All of which are handled by specialists in their respective fields.
      </S.HeroSubText>
      <Button variant='main' text='Get early access' icon={BtnIcon} />
    </S.Container>
  );
};

export default Hero;
