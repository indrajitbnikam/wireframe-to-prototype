import React from 'react';
import styles from './second-section.module.scss';

const {
  section,
  title,
  rooms,
  room,
  first_room,
  second_room,
  third_room,
  fourth_room,
  primary_link,
  secondary_link
} = styles;

const SecondSection = () => {
  return (
    <div className={section} id='shop' >
      <h2 className={title}>SHOP BY ROOM</h2>
      <div className={rooms}>
        <div className={`${room} ${first_room}`}>
          <p className={primary_link}>BEDROOM</p>
        </div>
        <div className={`${room} ${second_room}`}>
          <p className={secondary_link}>LIVING ROOM{' '}&rarr;</p>
        </div>
        <div className={`${room} ${third_room}`}>
          <p className={secondary_link}>READING ROOM{' '}&rarr;</p>
        </div>
        <div className={`${room} ${fourth_room}`}>
          <p className={secondary_link}>KITCHEN{' '}&rarr;</p>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
