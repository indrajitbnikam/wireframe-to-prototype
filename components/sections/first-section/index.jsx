import React from 'react'
import styles from './first-section.module.scss';
import Image from 'next/image';

const {
  section,
  cta,
  cta_text,
  cta_button,
  image_container,
  image_info,
  left_half,
  description,
  price,
  right_half,
  section_footer
} = styles;

const FirstSection = () => {
  return (
    <div className={section}>
      <div className={cta}>
        <h1 className={cta_text}>HANDPICKED FOR YOU</h1>
        <butto className={cta_button}>EXPLORE</butto>
      </div>
      <div className={image_container}>
        <div>
          <Image
            src='/assets/landing-section.png'
            height={800}
            width={1282}
            layout='fixed'
          />
          <div className={image_info}>
            <div className={left_half}>
              <p className={description}>
                LIVING ROOM DECOR COLLECTION
              </p>
              <p className={price}>
                STARTS FROM $114.5
              </p>
            </div>
            <div className={right_half}>
              {/** <p>&larr;{'  '}&rarr;</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className={section_footer}>
        <a href='#shop'>Scroll</a>
      </div>
    </div>
  )
}

export default FirstSection
