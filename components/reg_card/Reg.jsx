import React, { useContext, useState, useRef } from 'react';
import CardImg from '../../assets/images/card-img.jpg';
import * as S from './Reg.style';
import Image from 'next/image';
import CLoseIcon from '../../assets/icons/close-icon.svg';
import Access_Context from '../../context/access_context/Access_Context';
import axios from 'axios';
import Button from '../buttons/Button';
import ArrowIcon from '../../assets/icons/hero_btn_1.svg';
import { useTheme } from 'styled-components';

const Reg = () => {
  const formRef = useRef();
  const theme = useTheme();
  const { state, toggleAccess: action } = useContext(Access_Context);
  //-- User email object ------------------/
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //-- submit handler  ------------------/
  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (Email !== '' && Name !== '') {
      try {
        await axios
          .post('https://transol-backend.herokuapp.com/mail', {
            name: Name,
            email: Email,
          })
          .then((res) => {
            console.log(res.data);
            setIsLoading(false);
            formRef.current.reset();
            alert(
              `Congrats ${res.data.payload.name}! You are on our mailing list`
            );
          });
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        alert('Failed to add email');
      }
    } else {
      alert('Fields csnnot be empty');
      console.log(`the name is: ${Name} and the email is: ${Email}`);
    }
  };

  return (
    <S.Container open={state.value} theme={theme}>
      <S.CardImg>
        <Image src={CardImg} alt='' layout='fill' className='img' />
      </S.CardImg>
      <S.CardForm ref={formRef}>
        <h1>Join the Waiting list</h1>

        {/* ----- full name ----- */}
        <input
          type='text'
          minLength={4}
          placeholder='Full name'
          onChange={(e) => setName(e.target.value)}
        />

        {/* ----- email ----- */}
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ----- send btn ----- */}
        <Button
          variant='dark'
          text='Subscribe'
          icon={ArrowIcon}
          onClick={submitHandler}
          sx={{ marginTop: '7%', width: '70%', height: '7%' }}
        />
        {isLoading ? <p>Loading...</p> : ''}
      </S.CardForm>
      <S.CloseBtn
        onClick={() => {
          action();
          formRef.current?.reset();
        }}
      >
        <Image src={CLoseIcon} alt='' layout='fill' />
      </S.CloseBtn>
    </S.Container>
  );
};

export default Reg;
