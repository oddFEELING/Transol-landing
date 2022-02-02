import React from 'react';
import Image from 'next/image';
import * as S from './Step_Style';
import { useTheme } from 'styled-components';

const Step = (props) => {
  const { icon, title, content } = props;
  const theme = useTheme();

  const TiltOptions = {
    tiltMaxAngleX: 20,
    tiltMaxAngleY: 20,
    perspective: 1000,
    transitionSpeed: 1500,
    scale: 1.1,
    gyroscope: false,
  };

  return (
    <S.Container {...TiltOptions}>
      {/* ----- icon ----- */}
      <S.IconCard>
        <div
          style={{ width: '30px', height: '30px', position: 'relative' }}
          data-aos='fade-down'
        >
          <Image src={icon} alt='' layout='fill' data-aos='fade-up' />
        </div>
      </S.IconCard>

      {/* ----- title ----- */}
      <h2>{title}</h2>

      {/* ----- comntent ----- */}
      <p theme={theme}>{content}</p>
    </S.Container>
  );
};

export default Step;
