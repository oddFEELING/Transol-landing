import React from 'react';
import * as S from './Content.style';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import AboutImg from '../../../assets/images/about-img.jpg';

const Content = () => {
  const theme = useTheme();

  const tiltOptions = {
    tiltMaxAngleX: 4,
    tiltMaxAngleY: 4,
    perspective: 2500,
    transitionSpeed: 400,
    gyroscope: false,
  };

  return (
    <S.AbtContainer theme={theme}>
      <S.ParallaxContainer {...tiltOptions}>
        <S.ContentDiv theme={theme}>
          {/* ----- title text ----- */}
          <h1>About Us</h1>

          {/* ----- content ----- */}
          <p>
            TRANSOLUTION CENTRE LLC, an innovation born out of interest for
            vehicle management and wellness following researches and studies
            over the years. We are a team of creatives who stand out not just in
            our affection for vehicles but also for our commitment,transparency
            and honesty. Transol was founded to bridge the gap between vehicle
            users and vehice repair services with both parties at the fore front
            of the product. <br />
            Fueled by the spirit of innovation, we aim to acheive an eco-system
            of users and service providers that render services based on trust
            and confidentiality.
          </p>
        </S.ContentDiv>
        <S.ImageDiv theme={theme}>
          <Image src={AboutImg} alt='' layout='fill' className='img' />
        </S.ImageDiv>
      </S.ParallaxContainer>
    </S.AbtContainer>
  );
};

export default Content;
