import React from 'react'
import styles from './fifth-section.module.scss';
import Image from 'next/image';

const {
  section,
  services,
  service,
  image,
  name,
  description
} = styles;

const FifthSection = () => {
  return (
    <div className={section}>
      <div className={services}>
        <div className={service}>
          <div className={image}>
            <Image
              src='/assets/plane-line.png'
              width={120}
              height={120}
              layout='fixed'
            />
          </div>
          <span className={name}>FAST DELIVERY</span>
          <span className={description}>One day delivery available</span>
        </div>
        <div className={service}>
          <div className={image}>
            <Image
              src='/assets/carbon_badge.png'
              width={120}
              height={120}
              layout='fixed'
            />
          </div>
          <span className={name}>HIGH QUALITY</span>
          <span className={description}>Best in class manufacturing</span>
        </div>
        <div className={service}>
          <div className={image}>
            <Image
              src='/assets/clock-line.png'
              width={120}
              height={120}
              layout='fixed'
            />
          </div>
          <span className={name}>RETURN POLICY</span>
          <span className={description}>10 day return policy</span>
        </div>
        <div className={service}>
          <div className={image}>
            <Image
              src='/assets/support-agent.png'
              width={120}
              height={120}
              layout='fixed'
            />
          </div>
          <span className={name}>24x7 SUPPORT</span>
          <span className={description}>Live chat with service support</span>
        </div>
      </div>
    </div>
  )
}

export default FifthSection
