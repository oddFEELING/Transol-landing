import React from 'react';
import { useReducer, useEffect } from 'react';
import navReducer from './reducer';
import { useRouter } from 'next/router';
import Nav_Context from './nav_context';

const NavContext = ({ children }) => {
  useEffect(() => {
    let curTab = sessionStorage.getItem('currentTab');
    curTab = JSON.parse(curTab);

    if (curTab !== null) {
      curTab?.value === 'Home' ? navHome('/') : '';
      curTab?.value === 'About' ? navAbout('/about') : '';
      curTab?.value === 'Services' ? navServices('/services') : '';
      curTab?.value === 'Contact' ? navContact('/contact') : '';
    }
  }, []);

  const [state, dispatch] = useReducer(navReducer, {
    value: 'Home',
    route: '/',
  });
  useEffect(() => {
    console.log(`state changed`);
  }, [state]);

  const router = useRouter();

  // action dispatches
  const navHome = (payload) => {
    dispatch({ type: 'HOME', payload });
    router.push(payload);
    sessionStorage.setItem(
      'currentTab',
      JSON.stringify({ value: 'Home', route: '/' })
    );
  };
  const navAbout = (payload) => {
    dispatch({ type: 'ABOUT', payload });
    router.push(payload);
    sessionStorage.setItem(
      'currentTab',
      JSON.stringify({ value: 'About', route: '/about' })
    );
  };
  const navServices = (payload) => {
    dispatch({ type: 'SERVICES', payload });
    router.push(payload);
    sessionStorage.setItem(
      'currentTab',
      JSON.stringify({ value: 'Services', route: '/services' })
    );
  };
  const navContact = (payload) => {
    dispatch({ type: 'CONTACT', payload });
    router.push(payload);
    sessionStorage.setItem(
      'currentTab',
      JSON.stringify({ value: 'Contact', route: '/contact' })
    );
  };

  // assign dispatches to action object
  const actions = {
    navHome,
    navAbout,
    navServices,
    navContact,
  };

  return (
    <Nav_Context.Provider value={{ state, actions }}>
      {children}
    </Nav_Context.Provider>
  );
};

export default NavContext;
