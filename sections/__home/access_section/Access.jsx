import React from 'react';
import * as S from './Access_Styles';
import ButtonIcon from '../../../assets/icons/hero_btn_1.svg';
import Button from '../../../components/buttons/Button';
import { useTheme } from 'styled-components';

const Access = () => {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      {/* ----- Topic ----- */}
      <h1>
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
        onClick={() => alert('Mailing System coming soon...')}
      />
    </S.Container>
  );
};

export default Access;
