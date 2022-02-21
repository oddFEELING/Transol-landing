import React, { useReducer } from 'react';
import Access_Context from './Access_Context';
import reducer from './reducer';

const AccessContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { value: false, vid: false });

  // toggle the state
  function toggleAccess() {
    dispatch({ type: 'TOGGLE_NEWS' });
  }

  // toggle video
  function toggleVid() {
    dispatch({ type: 'TOGGLE_VIDEO' });
  }

  const actions = { toggleAccess, toggleVid };

  return (
    <Access_Context.Provider value={{ state, actions }}>
      {children}
    </Access_Context.Provider>
  );
};

export default AccessContext;
