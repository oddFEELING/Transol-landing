import React from 'react';
import * as S from './Button_Style';
import Image from 'next/image';
import { useTheme } from 'styled-components';

const Button = (props) => {
  const { variant, text, icon, onClick } = props;
  const theme = useTheme();

  return (
    <S.ButtonContainer variant={variant} theme={theme} onClick={onClick}>
      {/* ----- Buton text ----- */}
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
