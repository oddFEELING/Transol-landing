import React, { useEffect } from 'react';
import Image from 'next/image';
import TowImg from '../../../assets/images/service-tow.svg';
import SaleImg from '../../../assets/images/service-sale.svg';
import FleetImg from '../../../assets/images/service-fleet.svg';
import FixImg from '../../../assets/images/service-fix.svg';
import MechImg from '../../../assets/images/service-mech.svg';
import PriceImg from '../../../assets/images/service-price.svg';
import { useTheme } from 'styled-components';
import AOS from 'aos';
import * as S from './ServicesSect.style';

const ServicesSect = () => {
  const theme = useTheme();
  const serviceData = [
    {
      title: 'ON DEMAND MECHANICS',
      content: `Being the major basis of transol services, getting vehicle repair services from any place at anytime in under 30mins whilst saving you all the hassle of labour in just a few clicks.`,
      image: MechImg,
      left: true,
    },
    {
      title: 'FLEET MANAGEMENT',
      content: `We manage your fleet of cars either as an individual or a Coporate body. Platform for Coporate firms and individuals to register vehicles for proper Maintenance, Repair and Diagnosis.`,
      image: FleetImg,
      left: false,
    },
    {
      title: 'HIRE ARTISANS',
      content: `Subscribe to the "TRANSOL PREMIUM" feature to enjoy making an order on an approved access to unlimited data of tested and trusted artisans.`,
      image: FixImg,
      left: true,
    },
    {
      title: 'FLEXIBLE PRICE PLANS',
      content: `Transol offers affordable and reliable price plans for every transol user. Every plan has been designed to bring you transol services with ease.`,
      image: PriceImg,
      left: false,
    },
    {
      title: 'TOW SERVICES',
      content: `You got critical Auto issues beyond quick repair? get a Tow Service Assistant to your preferred destination from a point A - point B. For proper diagnosis, repair and maintenance, we tow your vehicle to our work station with proofed, certified and experience consulting professionals.`,
      image: TowImg,
      left: true,
    },
    {
      title: 'VEHICLE PART SALES',
      content: `Servicing made Simple! Buy vehicle parts of your choice and get it delivered to your preferred destination and even installed, add to cart and monitor ongoing orders and delivery processing.`,
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
              <h1 data-aos={item.left ? 'fade-right' : 'fade-left'}>
                {item.title}
              </h1>
              <p>{item.content}</p>
            </S.TextArea>
          </S.ServiceCard>
        );
      })}
    </S.Container>
  );
};

export default ServicesSect;
