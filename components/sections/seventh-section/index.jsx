import React from 'react'
import Image from 'next/image';
import styles from './seventh-section.module.scss';

const {
  section,
  link_groups,
  link_group,
  header,
  content,
  link,
  link_container,
  link_icon,
} = styles;

const SeventhSection = () => {
  return (
    <div className={section}>
      <div className={link_groups}>
        <div className={link_group}>
          <div className={header}>
            <Image
              src='/assets/logo.png'
              width={176}
              height={64}
              layout='fixed'
            />
          </div>
          <div className={content}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={link_group}>
          <div className={header}>
            <h3>CUSTOMER SERVICES</h3>
          </div>
          <div className={content}>
            <p className={link}>Contact Us</p>
            <p className={link}>Delivery</p>
            <p className={link}>Terms and Conditions</p>
            <p className={link}>Refund Policy</p>
            <p className={link}>FAQs</p>
          </div>
        </div>
        <div className={link_group}>
          <div className={header}>
            <h3>MY ACCOUNT</h3>
          </div>
          <div className={content}>
            <p className={link}>Cart</p>
            <p className={link}>Wishlist</p>
            <p className={link}>Checkout</p>
            <p className={link}>My account</p>
            <p className={link}>Privacy Policy</p>
          </div>
        </div>
        <div className={link_group}>
          <div className={header}>
            <h3>CONTACT US</h3>
          </div>
          <div className={content}>
            <div className={link_container}>
              <div className={link_icon}>
                <Image
                  src='/assets/shop-outlined.png'
                  width={20}
                  height={20}
                  layout='fixed'
                />
              </div>
              <p>
                <strong>Showroom:</strong> 1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
            </div>
            <div className={link_container}>
              <div className={link_icon}>
                <Image
                  src='/assets/clock-circle-outlined.png'
                  width={20}
                  height={20}
                  layout='fixed'
                />
              </div>
              <p>
                <strong>Opening hours:</strong> mollit non deserunt ullamco
              </p>
            </div>
            <div className={link_container}>
              <div className={link_icon}>
                <Image
                  src='/assets/email-outlined.png'
                  width={20}
                  height={20}
                  layout='fixed'
                />
              </div>
              <p>
                <strong>Email:</strong> mollit non deserunt
              </p>
            </div>
            <div className={link_container}>
              <div className={link_icon}>
                <Image
                  src='/assets/phone-call.png'
                  width={20}
                  height={20}
                  layout='fixed'
                />
              </div>
              <p>
                <strong>Hotline:</strong> (808) 555-0111
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeventhSection
