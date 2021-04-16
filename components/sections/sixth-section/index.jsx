import React from 'react'
import Image from 'next/image';
import styles from './sixth-section.module.scss';

const {
  section,
  content,
  text,
  title,
  tag_line,
  first_half,
  second_half,
  description,
  cta,
  image
} = styles;

const SixthSection = () => {
  return (
    <div className={section}>
      <div className={content}>
        <div className={text}>
          <h2 className={title}>
            CUSTOMIZED REQUIREMENTS
          </h2>
          <p className={tag_line}>
            <span className={first_half}>
              You Ideate,{' '}
            </span>
            <span className={second_half}>
              We Create
            </span>
          </p>
          <span className={description}>
            We take pride in providing customized requirements. Understanding every client’s design needs and provide them with their customized needs. We work with them to make their requirments come to life.
          </span>
        </div>
        <button className={cta}>
          KNOW MORE{' '}&rarr;
        </button>
      </div>
      <div className={image}>
        <Image
          src='/assets/custom_requirements.png'
          width={1000}
          height={557}
          layout='fixed'
        />
      </div>
    </div>
  )
}

export default SixthSection;
