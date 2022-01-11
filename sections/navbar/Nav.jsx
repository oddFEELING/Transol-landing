import React, { useState, useEffect } from 'react';
import * as S from './Nav_Style';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '../../assets/icons/menu.svg';
import RightIcon from '../../assets/icons/right.svg';
import useScreen from '../../hooks/useScreen';
import { useTheme } from 'styled-components';

const Nav = () => {
  let isMobile = useScreen();
  const theme = useTheme();
  const [Scrolled, setScrolled] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  //-->  Check for window scroll
  useEffect(() => {
    function handleSCroll() {
      if (window.scrollY > 10) setScrolled(true);
      if (window.scrollY < 10) setScrolled(false);
    }
    window.addEventListener('scroll', handleSCroll);

    return () => {
      window.removeEventListener('scroll', handleSCroll);
    };
  });

  return (
    <S.NavBar font={theme.fonts.pr_font} scrolled={Scrolled}>
      {isMobile ? (
        <>
          <h1>TRANSOL</h1>
          <S.MObileNavBtn onClick={() => setIsOpen(true)}>
            <Image src={MenuIcon} alt='' />
          </S.MObileNavBtn>
          <S.MobileMenu theme={theme} open={IsOpen}>
            <h1>Menu</h1>
            <S.BackBtn onClick={() => setIsOpen(false)}>
              <Image src={RightIcon} alt='' />
            </S.BackBtn>
            <S.MobileNavItems theme={theme}>
              <Link href='/' passHref>
                <a>Home</a>
              </Link>
              <Link href='/' passHref>
                <a>About</a>
              </Link>
              <Link href='/' passHref>
                <a>Product</a>
              </Link>
              <Link href='/' passHref>
                <a>Contact</a>
              </Link>
            </S.MobileNavItems>
          </S.MobileMenu>
        </>
      ) : (
        <>
          <h1>TRANSOL</h1>
          <S.DesktopNavItems>
            <Link href='/' passHref>
              <a>Home</a>
            </Link>
            <Link href='/' passHref>
              <a>About</a>
            </Link>
            <Link href='/' passHref>
              <a>Product</a>
            </Link>
            <Link href='/' passHref>
              <a>Contact</a>
            </Link>
          </S.DesktopNavItems>
        </>
      )}
    </S.NavBar>
  );
};

export default Nav;
