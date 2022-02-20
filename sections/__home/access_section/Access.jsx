import React, { useEffect, useContext } from 'react';
import * as S from './Access_Styles';
import ButtonIcon from '../../../assets/icons/hero_btn_1.svg';
import Button from '../../../components/buttons/Button';
import { useTheme } from 'styled-components';
import AOS from 'aos';
import Access_Context from '../../../context/access_context/Access_Context';

const Access = () => {
  const theme = useTheme();
  const { toggleAccess: action } = useContext(Access_Context);

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
          delay: 500,
          duration: 500,
          offset: 0,
        }}
        onClick={action}
      />
    </S.Container>
  );
};

export default Access;
