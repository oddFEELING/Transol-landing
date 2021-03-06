import React, { useContext, useState, useRef } from 'react';
import CardImg from '../../assets/images/card-img.jpg';
import CardImg2 from '../../assets/images/card-img-2.jpg';
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
  //-- ref for close button ------------------/
  const closeRef = useRef();
  const theme = useTheme();
  const { state, actions } = useContext(Access_Context);
  //-- User email object ------------------/
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  {
    /* <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/shell.js"></script>
<script>
  hbspt.forms.create({
	region: "eu1",
	portalId: "25592324",
	formId: "35e834f6-d016-40ea-9829-7ba3b164f655"
});
</script> */
  }

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
            setIsLoading(false);
            formRef.current.reset();
            closeRef.current.click();
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
      setIsLoading(false);
      alert('Fields csnnot be empty');
      console.log(`the name is: ${Name} and the email is: ${Email}`);
    }
  };

  return (
    <S.Modalbg open={state.value}>
      <S.Container open={state.value} theme={theme}>
        <S.CardImg>
          <Image src={CardImg2} alt='' layout='fill' className='img' />
        </S.CardImg>
        <S.CardForm ref={formRef}>
          <h1>Join the Waiting list</h1>

          {/* ----- full name ----- */}
          <input
            type='text'
            required
            minLength={4}
            placeholder='Full name'
            onChange={(e) => setName(e.target.value)}
          />

          {/* ----- email ----- */}
          <input
            type='email'
            required
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
            actions.toggleAccess();
            formRef.current?.reset();
          }}
          ref={closeRef}
        >
          <Image src={CLoseIcon} alt='' layout='fill' />
        </S.CloseBtn>
      </S.Container>
    </S.Modalbg>
  );
};

export default Reg;
