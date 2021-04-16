import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

const {
  header,
  left_items,
  logo,
  right_items
} = styles;

const Header = () => {
  return (
    <div className={header}>
      <div className={left_items}>
        <a className={styles.nav_item_left}>Shop</a>
        <a className={styles.nav_item_left}>Customise</a>
        <a className={styles.nav_item_left}>Sale</a>
        <a className={styles.nav_item_left}>Contact Us</a>
      </div>
      <div className={logo}>
        <Image src='/assets/logo.png' width='154' height='55.6' />
      </div>
      <div className={right_items}>
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
