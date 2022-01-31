import React, { useState, useEffect, useContext } from 'react';
import * as S from './Nav_Style';
import Image from 'next/image';
import MenuIcon from '../../assets/icons/menu.svg';
import RightIcon from '../../assets/icons/right.svg';
import useScreen from '../../hooks/useScreen';
import { useTheme } from 'styled-components';
import Nav_Context from '../../context/nav_context/nav_context';

const Nav = () => {
  const { state, actions } = useContext(Nav_Context);
  let isMobile = useScreen();
  const theme = useTheme();
  const [Scrolled, setScrolled] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  //-->  Check for window scroll
  useEffect(() => {
    function handleSCroll() {
      if (window.scrollY > 10) setScrolled(() => true);
      if (window.scrollY < 10) setScrolled(() => false);
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
              <S.NavLink
                picked={state.value === 'Home' ? true : false}
                onClick={() => {
                  actions.navHome('/');
                  setIsOpen((state) => !state);
                }}
                mobile
              >
                Home
              </S.NavLink>
              <S.NavLink
                picked={state.value === 'About' ? true : false}
                onClick={() => {
                  actions.navAbout('/about');
                  setIsOpen((state) => !state);
                }}
                mobile
              >
                About
              </S.NavLink>
              <S.NavLink
                picked={state.value === 'Services' ? true : false}
                onClick={() => {
                  actions.navServices('/services');
                  setIsOpen((state) => !state);
                }}
                mobile
              >
                Services
              </S.NavLink>
              <S.NavLink
                picked={state.value === 'Contact' ? true : false}
                onClick={() => {
                  actions.navContact('/contact');
                  setIsOpen((state) => !state);
                }}
                mobile
              >
                Contact
              </S.NavLink>
            </S.MobileNavItems>
          </S.MobileMenu>
        </>
      ) : (
        <>
          <h1>TRANSOL</h1>
          <S.DesktopNavItems>
            <S.NavLink
              picked={state.value === 'Home' ? true : false}
              onClick={() => actions.navHome('/')}
            >
              Home
            </S.NavLink>
            <S.NavLink
              picked={state.value === 'About' ? true : false}
              onClick={() => actions.navAbout('/about')}
            >
              About
            </S.NavLink>
            <S.NavLink
              picked={state.value === 'Services' ? true : false}
              onClick={() => actions.navServices('/services')}
            >
              Services
            </S.NavLink>

            <S.NavLink
              picked={state.value === 'Contact' ? true : false}
              onClick={() => actions.navContact('/contact')}
            >
              Contact
            </S.NavLink>
          </S.DesktopNavItems>
        </>
      )}
    </S.NavBar>
  );
};

export default Nav;
