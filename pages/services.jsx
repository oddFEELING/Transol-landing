import React from 'react';
import useScreen from '../hooks/useScreen';
import * as S from '../styles/services.styles';
import Hero from '../sections/__services/hero_section/Hero';

const Services = () => {
  const Small = useScreen();
  return (
    <S.Container>
      <Hero />
    </S.Container>
  );
};

export default Services;
