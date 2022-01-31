import React, { useState, useRef } from 'react';
import * as S from './Form.styles';
import Input from '../../../components/input/Input';
import Button from '../../../components/buttons/Button';
import BtnIcon from '../../../assets/icons/hero_btn_1.svg';

const Form = () => {
  const [FormObj, setFormObj] = useState({ name: '', email: '', message: '' });
  const formRef = useRef();

  // Handle bject change
  const handleObj = (prop) => (event) => {
    event.preventDefault();
    setFormObj(
      (FormObj) =>
        (FormObj = {
          ...FormObj,
          [prop]: event.target.value,
        })
    );
    console.log(FormObj);
  };

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
          onChange={handleObj('email')}
        />
        <Input tp='text' ph='Name' variant='single' dk />
        <Input tp='text' ph='Message here...' variant='multi' dk />
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
