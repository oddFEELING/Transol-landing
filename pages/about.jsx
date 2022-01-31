import React from 'react';
import Content from '../sections/__about/content_section/COntent';
import Hero from '../sections/__about/hero_section/Hero';
import Team from '../sections/__about/team_section/Team';
import * as S from '../styles/About.style';

const About = () => {
  return (
    <S.COntainer>
      <Hero />
      <Content />
      <Team />
    </S.COntainer>
  );
};

export default About;
