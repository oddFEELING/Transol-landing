import React from 'react';
import Image from 'next/image';
import * as S from './Step_Style';
import { useTheme } from 'styled-components';

const Step = (props) => {
  const { icon, title, content } = props;
  const theme = useTheme();

  return (
    <S.Container>
      {/* ----- icon ----- */}
      <S.IconCard>
        <div style={{ width: '30px', height: '30px', position: 'relative' }}>
          <Image src={icon} alt='' layout='fill' />
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
