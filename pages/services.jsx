import React from 'react';
import useScreen from '../hooks/useScreen';
import * as S from '../styles/services.styles';
import Hero from '../sections/__services/hero_section/Hero';
import ServicesSect from '../sections/__services/service_section/ServicesSect';

const Services = () => {
  const Small = useScreen();
  return (
    <S.Container>
      <Hero />
      <h1>Some of our services include </h1>
      <ServicesSect />
    </S.Container>
  );
};

export default Services;
