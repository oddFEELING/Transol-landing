import React, { useState, useRef, useEffect } from 'react';
import * as S from './Form.styles';
import Input from '../../../components/input/Input';
import Button from '../../../components/buttons/Button';
import BtnIcon from '../../../assets/icons/hero_btn_1.svg';

const Form = () => {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');

  const formRef = useRef();

  //-- Form data effect ------------------/
  useEffect(() => {
    console.log(Email);
    console.log(Name);
    console.log(Message);
  }, [Email, Name, Message]);

  return (
    <S.Container>
      <S.MainForm ref={formRef}>
        <h1>
          Drop us a<b> mail!</b>
        </h1>
        <Input
          tp='email'
          ph='Email'
          variant='single'
          dk
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          tp='text'
          ph='Name'
          variant='single'
          dk
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          tp='text'
          ph='Message here...'
          variant='multi'
          dk
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          variant='main'
          text='send!'
          sx={{ marginTop: '4%', width: '30%' }}
          icon={BtnIcon}
          onClick={() => formRef.current.reset()}
        />
      </S.MainForm>
    </S.Container>
  );
};

export default Form;
