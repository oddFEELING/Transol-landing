import React, { useContext } from 'react';
import useScreen from '../hooks/useScreen';
import * as S from '../styles/services.styles';
import Hero from '../sections/__services/hero_section/Hero';
import ServicesSect from '../sections/__services/service_section/ServicesSect';
import Access_Context from '../context/access_context/Access_Context';

const Services = () => {
  const Small = useScreen();
  const { state } = useContext(Access_Context);
  return (
    <S.Container modal={state.value}>
      <Hero />
      <S.Header>
        <h1>Transol Services</h1>
        <p>
          At transol, all services offered are rendered with the users of the
          system in mind and so as to ensure maximum satisfaction. Some of the
          services we offer are
        </p>
      </S.Header>
      <ServicesSect />
    </S.Container>
  );
};

export default Services;
