import React from 'react';
import * as S from './Expert_Style';
import { useTheme } from 'styled-components';
import SearchIcon from '../../assets/icons/expert_search.svg';
import SelectIcon from '../../assets/icons/expert_select.svg';
import GetIcon from '../../assets/icons/expert_get.svg';
import Step from '../../components/expert_step/Step';

const Expert = () => {
  const theme = useTheme();

  const stepContent = [
    {
      icon: SearchIcon,
      title: 'Search for mechanic',
      content:
        'Search through the app to see Transol Rangers within your vicinity.',
    },
    {
      icon: SelectIcon,
      title: 'Select a Transol Ranger',
      content: 'Select from our list of carefully vetted automobile experts',
    },
    {
      icon: GetIcon,
      title: 'Get a mechanic within 30mins',
      content:
        'Sit back, relax and get one of our Transol Rangers to your exact location in less than 30mins',
    },
  ];
  return (
    <S.Container>
      {/* ----- Top COntent ----- */}
      <S.TopSection theme={theme}>
        {/* ----- pre text ----- */}
        <h3>Get Mechanics on demand</h3>

        {/* ----- Main text ----- */}
        <h1>Get automobile experts in less than 30minutes</h1>

        {/* ----- desc text ----- */}
        <p>Request for our Rangers in 3 easy steps</p>
      </S.TopSection>

      {/* ----- Step Section ----- */}

      <S.StepContainer>
        {stepContent.map((data, index) => {
          return (
            <Step
              icon={data.icon}
              title={data.title}
              content={data.content}
              key={index}
            />
          );
        })}
      </S.StepContainer>
    </S.Container>
  );
};

export default Expert;
