import Head from 'next/head';
import { useContext } from 'react';
import * as S from '../styles/HomeStyle';
import Top from '../sections/__home/top_section/Top';
import Hero from '../sections/__home/hero_section/Hero';
import Expert from '../sections/__home/expert_section/Expert';
import Service from '../sections/__home/service_section/Service';
import Access from '../sections/__home/access_section/Access';
import Faq from '../sections/__home/faq_section/Faq';
import Access_Context from '../context/access_context/Access_Context';

export default function Home() {
  const { state } = useContext(Access_Context);
  return (
    <S.Container modal={state.value}>
      <Head>
        <title>Transol: Home</title>
        <meta name='description' content='Transol landing page' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <S.Main>
        <Hero />
        <Top />
        <Expert />
        <Service />
        <Access />
        <Faq />
      </S.Main>
    </S.Container>
  );
}
