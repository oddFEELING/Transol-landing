import React, { useEffect } from 'react';
import Image from 'next/image';
import TowImg from '../../../assets/images/service-tow.svg';
import SaleImg from '../../../assets/images/service-sale.svg';
import FleetImg from '../../../assets/images/service-fleet.svg';
import FixImg from '../../../assets/images/service-fix.svg';
import { useTheme } from 'styled-components';
import AOS from 'aos';
import * as S from './ServicesSect.style';

const ServicesSect = () => {
  const theme = useTheme();
  const serviceData = [
    {
      title: 'VEHICLE REPAIR',
      content:
        'Being the major basis of transol services, getting vehicle repair services from any place at anytime in under 30mins whilst saving you all the hassle of ',
      image: FixImg,
      left: true,
    },
    {
      title: 'FLEET MANAGEMENT',
      content: 'Get repair specialists anywhere, anytime to a given locaton',
      image: FleetImg,
      left: false,
    },
    {
      title: 'TOW SERVICES',
      content: 'Get repair specialists anywhere, anytime to a given locaton',
      image: TowImg,
      left: true,
    },
    {
      title: 'VEHICLE PART SALES',
      content: 'Get repair specialists anywhere, anytime to a given locaton',
      image: SaleImg,
      left: false,
    },
  ];

  // aos init effect
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <S.Container theme={theme}>
      {serviceData.map((item, index) => {
        return (
          <S.ServiceCard key={index} left={item.left}>
            <S.ServiceImg data-aos='zoom-in'>
              <Image src={item.image} alt='' layout='fill' />
            </S.ServiceImg>
            <S.TextArea
              left={item.left}
              data-aos={item.left ? 'fade-right' : 'fade-left'}
            >
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </S.TextArea>
          </S.ServiceCard>
        );
      })}
    </S.Container>
  );
};

export default ServicesSect;
