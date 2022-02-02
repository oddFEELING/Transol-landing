import React, { useContext } from 'react';
import CardImg from '../../assets/images/card-img.jpg';
import * as S from './Reg.style';
import Image from 'next/image';
import CLoseIcon from '../../assets/icons/close-icon.svg';
import Access_Context from '../../context/access_context/Access_Context';
import Button from '../buttons/Button';
import { useTheme } from 'styled-components';

const Reg = () => {
  const theme = useTheme();
  const { state, toggleAccess: action } = useContext(Access_Context);
  return (
    <S.Container open={state.value} theme={theme}>
      <S.CardImg>
        <Image src={CardImg} alt='' layout='fill' className='img' />
      </S.CardImg>
      <S.CardForm>
        <h1>Join the Waiting list</h1>

        {/* ----- full name ----- */}
        <input type='text' minLength={4} placeholder='Full name' />

        {/* ----- email ----- */}
        <input type='email' placeholder='Email' />

        {/* ----- send btn ----- */}
        <Button variant='dark' text='Subscribe' />
      </S.CardForm>
      <S.CloseBtn onClick={action}>
        <Image src={CLoseIcon} alt='' layout='fill' />
      </S.CloseBtn>
    </S.Container>
  );
};

export default Reg;
