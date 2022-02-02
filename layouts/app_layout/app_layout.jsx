import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import Nav from '../../sections/navbar/Nav';
import Footer from '../../sections/footer_section/Footer';
import * as S from './app_layout.style';
import Script from 'next/script';
import AOS from 'aos';
import Access_Context from '../../context/access_context/Access_Context';
import Reg from '../../components/reg_card/Reg';

const App_Layout = ({ children }) => {
  const { toggleAccess } = useContext(Access_Context);

  // AOS init effect
  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: 'mobile',
      offset: 0,
    });
  }, []);

  return (
    <S.Main>
      <Head>
        <title>Transol</title>
        <meta name='description' content='Transol landing page' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://unpkg.com/aos@2.3.1/dist/aos.css'
          rel='stylesheet'
        />
      </Head>
      <Nav />
      {children}
      <Reg />
      <Footer />
      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></Script>
    </S.Main>
  );
};

export default App_Layout;
