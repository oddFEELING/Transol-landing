import React from 'react';
import * as S from './Button_Style';
import Image from 'next/image';
import AOS from 'aos';
import { useTheme } from 'styled-components';

const Button = (props) => {
  const { variant, text, icon, onClick, sx: styles, 'anim-aos': aos } = props;
  const theme = useTheme();

  return (
    <S.ButtonContainer
      variant={variant}
      theme={theme}
      onClick={onClick}
      style={{ ...styles }}
      data-aos={aos?.anim}
      data-aos-delay={aos?.delay}
      data-aos-offset={aos?.offset}
      data-aos-duration={aos?.duration}
    >
      {/* ----- Button text ----- */}
      {text}

      {/* ----- Button Icon ----- */}
      {icon ? (
        <S.ImageDiv>
          <Image src={icon} alt='' layout='fill' className='image' />
        </S.ImageDiv>
      ) : (
        ''
      )}
    </S.ButtonContainer>
  );
};

export default Button;
