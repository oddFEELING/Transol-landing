import React, { useState, useRef, useEffect } from 'react';
import * as S from './Form.styles';
import axios from 'axios';
import Input from '../../../components/input/Input';
import Button from '../../../components/buttons/Button';
import BtnIcon from '../../../assets/icons/hero_btn_1.svg';

const Form = () => {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [Loading, setLoading] = useState(false);

  const formRef = useRef();

  //-- Form data effect ------------------/
  // useEffect(() => {
  //   console.log(Email);
  //   console.log(Name);
  //   console.log(Message);
  // }, [Email, Name, Message]);

  //-- handle submit ------------------/
  const submitHandler = async () => {
    setLoading(true);
    // formRef.current.preventDefault();
    formRef.current.reset();
    try {
      await axios
        .post('https://transol-backend.herokuapp.com/contact', {
          email: Email,
          name: Name,
          message: Message,
        })
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          alert('Message Recorded! Thanks for your feedback');
        });
    } catch (err) {
      setLoading(false);
      alert('Failed to send message');
      console.log(err);
    }
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
          onClick={submitHandler}
        />
        {Loading ? <p>Loading...</p> : ''}
      </S.MainForm>
    </S.Container>
  );
};

export default Form;
