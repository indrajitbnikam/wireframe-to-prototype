import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';

const {
  footer,
  service,
  service_container,
  services,
  image_container,
  text_container,
  copyright_text
} = styles;

const Footer = () => {

  const servicesData = [{
    image: '/assets/cil_truck.png',
    title: 'FREE DELIVERY',
    subTitle: 'Amet minim mollit non deserunt'
  },
  {
    image: '/assets/la_tools-solid.png',
    title: 'FREE INSTALLATION',
    subTitle: 'Amet minim mollit non deserunt'
  },
  {
    image: '/assets/ri_customer-service-2-line.png',
    title: 'CUSTOMER SUPPORT 24 HOURS',
    subTitle: 'Amet minim mollit non deserunt'
  }];

  const getServices = () => servicesData.map(svc => (
    <div className={service} key={svc.title}>
      <div className={image_container}>
        <Image src={svc.image} layout='fill' />
      </div>
      <div className={text_container}>
        <p className='text-lg font-semibold'>{svc.title}</p>
        <p className='text-base text-gray-500 font-medium'>
          {svc.subTitle}
        </p>
      </div>
    </div>
  ));

  return (
    <footer className={footer}>
      <div className={services}>
        <div className={service_container}>
          {
            getServices()
          }
        </div>
      </div>
      <div className='flex items-center justify-center w-full m-auto h-16'>
        <Image
          src='/assets/ant-design_copyright-circle-outlined.png'
          width='16'
          height='16'
        />
        <p className={copyright_text}>
          2020 Copyright Woodstock Furniture. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
