import React from 'react'
import styles from './fourth-section.module.scss';
import Image from 'next/image';

const {
  section,
  first_section,
  primary_title,
  secondary_title,
  description,
  second_section,
  third_section,
  fourth_section,
  offer_card,
  first_card,
  second_card,
  text_one,
  text_two,
  text_three,
  image,
  first_image,
  second_image,
  subscribe_form,
  subscribe_text,
  input_container,
  input,
  button
} = styles;

const FourthSection = () => {
  return (
    <div className={section}>
      <div className={first_section}>
        <h2 className={primary_title}>
          DISCOUNTS <br />AND SALES
        </h2>
        <span className={description}>
          Follow our promotions and discounts. Stay updated so you can buy your favorite home furniture at the best prices. Hurry up to buy at an attractive price!
        </span>
      </div>
      <div className={second_section}>
        <div className={`${offer_card} ${first_card}`}>
          <div className={text_one}>
            Best Selling
          </div>
          <div className={text_two}>
            TRIPOD LIGHTS UP TO 70% OFF
          </div>
          <div className={text_three}>
            2 DAYS LEFT {' '} &rarr;
          </div>
        </div>
        <div className={`${image} ${first_image}`}>
          <Image
            src='/assets/discount_1.png'
            width={446}
            height={446}
            layout='fixed'
          />
        </div>
      </div>
      <div className={third_section}>
        <div className={`${offer_card} ${second_card}`}>
          <div className={text_one}>
            Top Discounts
          </div>
          <div className={text_two}>
            SAVE UP TO 50% OFF
          </div>
          <div className={text_three}>
            BUY NOW {' '} &rarr;
          </div>
        </div>
        <div className={`${image} ${second_image}`}>
          <Image
            src='/assets/discount_2.png'
            width={500}
            height={500}
            layout='fixed'
          />
        </div>
      </div>
      <div className={fourth_section}>
        <div className={subscribe_form}>
         <div className={subscribe_text}>
          <h3 className={secondary_title}>
              STAY UPDATED
            </h3>
            <span className={description}>
              Join our list and get 15% off on your first purchase!
            </span>
          </div>
          <div className={input_container}>
            <input
              className={input}
              placeholder='Email address'
            ></input>
            <button className={button}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSection
