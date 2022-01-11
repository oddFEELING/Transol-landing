import React from 'react';
import * as S from './Top_Style';
import Image from 'next/image';
import LaptopImg from '../../assets/images/laptop_mock.svg';
import { useTheme } from 'styled-components';

const Top = () => {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      {/* ----- Text area ----- */}
      <S.TeaxtArea>
        {/* ----- pre text ----- */}
        <h3>Get Mechanics on demand</h3>

        {/* ----- Main text ----- */}
        <h1>
          Get your cars fixed by <br />
          One of our specially trained <br />
          Transol Rangers
        </h1>

        {/* ----- desc text ----- */}
        <p>
          Select from our team of specially trained and well vetted <br />
          Transol Rangers to work on your automobile
        </p>
      </S.TeaxtArea>

      {/* ----- Image area ----- */}
      <S.ImageArea>
        <Image src={LaptopImg} alt='' layout='fill' className='image' />
      </S.ImageArea>
    </S.Container>
  );
};

export default Top;
