import Head from 'next/head';
import * as S from '../styles/HomeStyle';
import Top from '../sections/__home/top_section/Top';
import Hero from '../sections/__home/hero_section/Hero';
import Expert from '../sections/__home/expert_section/Expert';
import Service from '../sections/__home/service_section/Service';
import Access from '../sections/__home/access_section/Access';
import Faq from '../sections/__home/faq_section/Faq';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Transol</title>
        <meta name='description' content='Transol landing page' />
        <link rel='icon' href='/favicon.ico' />
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
