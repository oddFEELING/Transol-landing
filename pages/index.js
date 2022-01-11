import Head from 'next/head';
import * as S from '../styles/HomeStyle';
import Nav from '../sections/navbar/Nav';
import Top from '../sections/top_section/Top';
import Hero from '../sections/hero_section/Hero';
import Expert from '../sections/expert_section/Expert';
import Service from '../sections/service_section/Service';
import Access from '../sections/access_section/Access';
import Faq from '../sections/faq_section/Faq';
import Footer from '../sections/footer_section/Footer';

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Transol</title>
        <meta name='description' content='Transol landing page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <S.Main>
        <Nav />
        <Hero />
        <Top />
        <Expert />
        <Service />
        <Access />
        <Faq />
        <Footer />
      </S.Main>
    </S.Container>
  );
}
