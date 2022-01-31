import React, { useState, useEffect } from 'react';
import * as S from '../styles/Contact.style';
import { useTheme } from 'styled-components';
import useSmall from '../hooks/useSmall';
import { Grid } from '@mui/material';
import Image from 'next/image';
import Img1 from '../assets/images/contact-hero.jpg';
import Img2 from '../assets/images/contact-hero-2.jpg';
import Form from '../sections/__contact/form/Form';

const Contact = () => {
  const [HeroImg, setHeroImg] = useState(Img2);
  const theme = useTheme();
  const small = useSmall();

  // Imahge effect
  useEffect(() => {
    function handleImg() {
      window.innerWidth < 900 ? setHeroImg(Img2) : setHeroImg(Img1);
    }

    window.addEventListener('load', handleImg);
    window.addEventListener('resize', handleImg);

    // cleanup
    return () => {
      window.removeEventListener('load', handleImg);
      window.removeEventListener('resize', handleImg);
    };
  });

  // anotehr effect for imagr change
  useEffect(() => {
    (function handleImg() {
      window.innerWidth < 1200 ? setHeroImg(Img2) : setHeroImg(Img1);
    })();
  }, []);

  return (
    <S.Container theme={theme}>
      <Grid container sx={{ height: '100%' }}>
        {/* ----- Pattern section ----- */}
        <Grid item xs={12} md={4} lg={5} sx={{ zIndex: '1' }}>
          <S.PatternDiv>
            <Image src={HeroImg} alt='' layout='fill' className='img' />
          </S.PatternDiv>
        </Grid>

        {/* ----- Contact form ----- */}
        <Grid item xs={12} md={8} lg={7} sx={{ zIndex: '3' }}>
          <Form />
        </Grid>
      </Grid>
    </S.Container>
  );
};

export default Contact;
