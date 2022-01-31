import React from 'react';
import Image from 'next/image';
import OluImg from '../../../assets/images/olu-img.jpeg';
import TaiwoImg from '../../../assets/images/taiwo.jpeg';
import SalImg from '../../../assets/images/sal-img.jpeg';
import EmmaImg from '../../../assets/images/emma-img.jpeg';
import OyeImg from '../../../assets/images/oye-img.jpeg';
import RichImg from '../../../assets/images/richard-img.jpeg';
import DamilareImg from '../../../assets/images/damilare.jpeg';
import FBIcon from '../../../assets/icons/fb.svg';
import LinkedinIcon from '../../../assets/icons/linkedin.svg';
import TweetIcon from '../../../assets/icons/twitter.svg';
import * as S from './Team.style';
import { Grid } from '@mui/material';
import { useTheme } from 'styled-components';

const Team = () => {
  const theme = useTheme();

  // team members info
  const TeamData = [
    {
      name: 'Oyedepo Oyelere',
      image: OyeImg,
      role: 'COO',
      desc: 'Chief Operations Officer, overseeing service implementation.',
    },
    {
      name: 'Oluwole Ojikutu',
      image: OluImg,
      role: 'CFO',
      desc: 'Chief Financial Officer, investment regulation compliance.',
    },
    {
      name: 'Aishat Salami',
      image: SalImg,
      role: 'HR',
      desc: 'Human Resource Manager, employee relations and performance management.',
    },
    {
      name: 'Alawode Emma',
      image: EmmaImg,
      role: 'CTO',
      desc: 'Research and Development process. System development. Web development, UI/UX prototyping.',
    },
    {
      name: 'Abiodun Damilare',
      image: DamilareImg,
      role: 'CEO',
      desc: 'Founder/ CEO. Head of services and operations, agenda direction.',
    },
    {
      name: 'Taiwo Giwa ',
      image: TaiwoImg,
      role: 'CMO',
      desc: 'Chief Marketing Officer, Advert and user research on target market.',
    },
  ];
  return (
    <S.Container theme={theme}>
      {/* ----- title text ----- */}
      <h1>Meet the team</h1>

      {/* ----- title subtext ----- */}
      <p>
        Our philosophy is simple -- Get a team of diverse passionate people and
        foster a culture that empowers you to do your best work
      </p>

      {/* ----- Team grid  ----- */}
      <Grid container spacing={3} sx={{ width: '70vw' }}>
        {/* ----- grid content here ----- */}
        {TeamData.map((data, index) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <S.TeamCard>
                <Image src={data.image} alt='' layout='fill' className='img' />
                <S.CardInfo>
                  {/* ----- name ----- */}
                  <h1>{data.name}</h1>

                  {/* ----- role ----- */}
                  <h3>
                    <b>{data.role}</b>
                  </h3>

                  {/* ----- desc ----- */}
                  <h3 style={{ marginTop: '-7%' }}>{data.desc}</h3>

                  {/* ----- socials ----- */}
                  <S.SocialDiv>
                    <div>
                      <Image src={FBIcon} alt='' layout='fill' />
                    </div>
                    <div>
                      <Image src={LinkedinIcon} alt='' layout='fill' />
                    </div>
                    <div>
                      <Image src={TweetIcon} alt='' layout='fill' />
                    </div>
                  </S.SocialDiv>
                </S.CardInfo>
              </S.TeamCard>
            </Grid>
          );
        })}
      </Grid>
    </S.Container>
  );
};

export default Team;
