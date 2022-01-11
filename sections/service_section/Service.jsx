import React from 'react';
import * as S from './Service_Style';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import FLeetIcon from '../../assets/icons/service_fleet.svg';
import PartIcon from '../../assets/icons/service_parts.svg';

const Service = () => {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      {/* ----- title section ----- */}
      <h1>Explore other services</h1>

      {/* ----- Card section ----- */}
      <S.CardSection>
        {/* ----- fleet card ----- */}
        <S.CardDiv theme={theme}>
          {/* ----- Icon ARea ----- */}
          <S.CardIconDiv>
            <Image src={FLeetIcon} alt='' layout='fill' />
          </S.CardIconDiv>

          {/* ----- Text Area ----- */}
          <S.TextArea theme={theme}>
            <h1>
              Manage your fleet with <br />
              <b>Transol Fleet Management</b>
            </h1>
            <p>
              We can manage your fleet of cars either as an individual or a
              corporate body.
            </p>
          </S.TextArea>
        </S.CardDiv>

        {/* ----- parts card ----- */}
        <S.CardDiv theme={theme}>
          {/* ----- Icon ARea ----- */}
          <S.CardIconDiv>
            <Image src={PartIcon} alt='' layout='fill' />
          </S.CardIconDiv>

          {/* ----- Text Area ----- */}
          <S.TextArea>
            <h1>
              Buy vehicle parts and <br />
              <b>Have them delivered to you</b>
            </h1>
            <p>
              Servicing made simple: Buy vehicle parts of choice and get it
              delivered to your prefered destination, Monitor ongoing orders and
              delivery processing.
            </p>
          </S.TextArea>
        </S.CardDiv>
      </S.CardSection>
    </S.Container>
  );
};

export default Service;
