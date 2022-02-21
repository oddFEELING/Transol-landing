import React, { useContext } from 'react';
import Image from 'next/image';
import CloseIcon from '../../assets/icons/close-icon.svg';
import * as S from './Vid.component';
import Access_Context from '../../context/access_context/Access_Context';

const Vid = () => {
  const { state, actions } = useContext(Access_Context);
  return (
    <S.Container open={state.vid}>
      <iframe
        width='100%'
        height='100%'
        src='https://www.youtube.com/embed/KtfSY11fzJo?rel=0?playlist=KtfSY11fzJo&loop=1'
        title='Transolutions WorldWide'
        frameBorder='0'
        allow='accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullScreen
      ></iframe>
      <S.CloeBtn onClick={actions.toggleVid}>
        <Image src={CloseIcon} alt='' layout='fill' />
      </S.CloeBtn>
    </S.Container>
  );
};

export default Vid;
