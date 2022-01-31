import React, { useState, useEffect } from 'react';
import * as S from './input.style.js';
import { useTheme } from 'styled-components';

const Input = (props) => {
  const [Value, setValue] = useState('');
  const { variant, ph, tp, dk, onChange } = props;
  const [Component, setComponent] = useState(<div />);
  const theme = useTheme();

  // form change function

  useEffect(() => {
    //   for text input
    if (variant === 'single')
      setComponent(
        <S.Input placeholder={ph} type={tp} dk={dk} onChange={onChange} />
      );

    // for multiline input
    if (variant === 'multi')
      setComponent(
        <S.Area placeholder={ph} type={tp} dk={dk} onChange={onChange} />
      );
  }, []);

  return Component;
};

export default Input;
