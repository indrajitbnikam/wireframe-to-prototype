import React from 'react'
import styles from './third-section.module.scss';
import Image from 'next/image';

const {
  section,
  title,
  subTitle,
  categories,
  category,
  active,
  products,
  product_card,
  image_container,
  left_view,
  right_view,
  on_hover,
  image,
  badge,
  red_badge,
  green_badge,
  product_info,
  info,
  name,
  price,
  old_price,
  new_price,
  buy,
  show_more
} = styles;

const ThirdSection = () => {
  return (
    <div className={section}>
      <h2 className={title}>FEATURED PRODUCTS</h2>
      <h3 className={subTitle}>Select a category with special high-end quality</h3>

      <div className={categories}>
        <div className={`${category} ${active}`}>ALL PRODUCTS</div>
        <div className={category}>CHAIRS</div>
        <div className={category}>CABINETS</div>
        <div className={category}>BEDS</div>
      </div>

      <div className={products}>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_1.png'
                width={306}
                height={306}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>RACE GAMING CHAIR</span>
              <span className={price}>$ 23.45</span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_2.png'
                width={325}
                height={294}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>MODERN WOOD SOFA</span>
              <span className={price}>$ 44.50</span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                  layout='fixed'
                />
              </div>
              <div className={`${badge} ${red_badge}`} style={{marginLeft: '5px'}}>
                <span>-25%</span>
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_3.png'
                width={373}
                height={216}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>OFFICE CHAIR SET</span>
              <span className={price}>
                <span className={old_price}>$ 200.50</span>
                <span className={new_price}>$ 150.40</span>
              </span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                />
              </div>
              <div className={`${badge} ${green_badge}`} style={{marginLeft: '5px'}}>
                <span>NEW</span>
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_4.png'
                width={266}
                height={304}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>GLASS TABLE</span>
              <span className={price}>$ 20.34</span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_5.png'
                width={351}
                height={287}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>WOODEN CABINET</span>
              <span className={price}>$ 98.65</span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
        <div className={product_card}>
          <div className={image_container}>
            <div className={left_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/eye-icon.png'
                  width={20}
                  height={20}
                />
                <span style={{marginLeft: '5px'}}>QUICK VIEW</span>
              </div>
            </div>
            <div className={right_view}>
              <div className={on_hover}>
                <Image
                  src='/assets/heart-circle.png'
                  width={50}
                  height={50}
                  layout='fixed'
                />
              </div>
            </div>
            <div className={image}>
              <Image
                src='/assets/product_6.png'
                width={389}
                height={228}
              />
            </div>
          </div>
          <div className={product_info}>
            <div className={info}>
              <span className={name}>RED CUSHION SOFA</span>
              <span className={price}>$ 50.00</span>
            </div>
            <div className={buy}>
              <Image
                src='/assets/shopping-bag.png'
                width={40}
                height={40}
              />
              <span>BUY NOW</span>
            </div>
          </div>
        </div>
      </div>

      <div className={show_more}>
        <span>SHOW MORE</span>
      </div>
      </div>
  )
}

export default ThirdSection;