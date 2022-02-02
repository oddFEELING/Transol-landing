import React, { useContext } from 'react';
import Content from '../sections/__about/content_section/Content';
import Access_Context from '../context/access_context/Access_Context';
import Hero from '../sections/__about/hero_section/Hero';
import Team from '../sections/__about/team_section/Team';
import * as S from '../styles/About.style';

const About = () => {
  const { state } = useContext(Access_Context);
  return (
    <S.COntainer modal={state.value}>
      <Hero />
      <Content />
      <Team />
    </S.COntainer>
  );
};

export default About;
