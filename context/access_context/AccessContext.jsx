import React, { useReducer } from 'react';
import Access_Context from './Access_Context';
import reducer from './reducer';

const AccessContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { value: false });

  // toggle the state
  function toggleAccess() {
    dispatch({
      type: 'TOGGLE',
    });
  }

  const actions = toggleAccess;

  return (
    <Access_Context.Provider value={{ state, toggleAccess }}>
      {children}
    </Access_Context.Provider>
  );
};

export default AccessContext;
