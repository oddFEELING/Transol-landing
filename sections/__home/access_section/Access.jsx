import React, { useEffect } from 'react';
import * as S from './Access_Styles';
import ButtonIcon from '../../../assets/icons/hero_btn_1.svg';
import Button from '../../../components/buttons/Button';
import { useTheme } from 'styled-components';
import AOS from 'aos';

const Access = () => {
  const theme = useTheme();

  // AOS effect
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 0,
      // once: true,
    });
  }, []);
  return (
    <S.Container theme={theme}>
      {/* ----- Topic ----- */}
      <h1 data-aos='fade-down'>
        Get early access to <br />
        <b>Use Transol</b>
      </h1>

      {/* ----- Text ----- */}
      <p>
        We will notify you when we go live! Meanwhile you <br /> can subscribe
        to get periodic updates directly to your mail.
      </p>

      {/* ----- Button ----- */}
      <Button
        text='Get access'
        variant='main'
        icon={ButtonIcon}
        anim-aos={{
          anim: 'fade-up',
          delay: 1000,
          duration: 500,
          offset: 0,
        }}
        onClick={() => alert('Mailing System coming soon...')}
      />
    </S.Container>
  );
};

export default Access;
