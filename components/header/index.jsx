import React from 'react';
import Head from 'next/head';
import styles from './header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='h-36 flex items-center w-full m-auto px-10' style={{maxWidth: '1400px'}}>
      <div className='w-1/3 flex justify-start items-center'>
        <a className={styles.nav_item_left}>Shop</a>
        <a className={styles.nav_item_left}>Customise</a>
        <a className={styles.nav_item_left}>Sale</a>
        <a className={styles.nav_item_left}>Contact Us</a>
      </div>
      <div className='w-1/3 flex justify-center'>
        <Image src='/assets/logo.png' width='154' height='55.6' />
      </div>
      <div className='w-1/3 flex justify-end'>
        <div className={styles.nav_item_right}>
          <Image src='/assets/bx_bx-search.png' layout='fill' />
        </div>
        <div className={styles.nav_item_right}>
          <Image src='/assets/user.png' layout='fill' />
        </div>
        <div className={styles.nav_item_right}>
          <Image src='/assets/heart.png' layout='fill' />
          <span className={styles.badge}>4</span>
        </div>
        <div className={styles.nav_item_right}>
          <Image src='/assets/cart.png' layout='fill' />
          <span className={styles.badge}>2</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
