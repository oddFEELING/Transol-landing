import React from 'react';
import { useTheme } from 'styled-components';
import * as S from './Footer_Style';
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      <h1>TRANSOL</h1>
      <Link href='/'>
        <p>Privacy policy</p>
      </Link>
      <Link href='/'>
        <p>Terms and Conditions</p>
      </Link>
      <Link href='/'>
        <p>2021 Transolution WORLDWIDE inc LLC . All rights reserved</p>
      </Link>
    </S.Container>
  );
};

export default Footer;
