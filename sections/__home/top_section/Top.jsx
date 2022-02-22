import React from 'react';
import * as S from './Top_Style';
import Image from 'next/image';
import LaptopImg from '../../../assets/images/laptop_mock.svg';
import MobileImg from '../../../assets/images/mobile_mock.svg';
import { useTheme } from 'styled-components';
import useScreen from '../../../hooks/useScreen';

const Top = () => {
  const theme = useTheme();
  const Mobile = useScreen();

  return (
    <S.Container theme={theme}>
      {/* ----- Text area ----- */}
      <S.TeaxtArea>
        {/* ----- pre text ----- */}
        <h3 data-aos='fade-left' data-aos-delay='300'>
          Get Mechanics on demand
        </h3>

        {/* ----- Main text ----- */}
        <h1 data-aos='fade-right'>
          Get your cars fixed by <br />
          One of our specially trained <br />
          Transol Rangers
        </h1>

        {/* ----- desc text ----- */}
        <p data-aos='fade-right' data-aos-delay='300'>
          Select from our team of specially trained and well vetted <br />
          Transol Rangers to work on your automobile
        </p>
      </S.TeaxtArea>

      {/* ----- Image area ----- */}
      <S.ImageArea>
        <Image
          src={Mobile ? MobileImg : LaptopImg}
          alt=''
          layout='fill'
          className='image'
        />
      </S.ImageArea>
    </S.Container>
  );
};

export default Top;
