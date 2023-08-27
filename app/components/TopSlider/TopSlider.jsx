'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import styles from './TopSlider.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './sliderСostumization.css'

export default function TopSlider() {
    return(
        <Swiper 
            className={styles.sliderItems}
            modules={[Navigation]}
            slidesPerView={1}
            navigation={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
        >
                <SwiperSlide>
                    <img src="./la-vien/home-images/slider-images/slider-image2.jpg" alt="" className={styles.sliderImg} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="./la-vien/home-images/slider-images/slider-image1.jpg" alt="" className={styles.sliderImg} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="./la-vien/home-images/slider-images/slider-image3.jpg" alt="" className={styles.sliderImg} />
                </SwiperSlide>
                
                <SwiperSlide>
                    <img src="./la-vien/home-images/slider-images/slider-image4.jpg" alt="" className={styles.sliderImg} />
                </SwiperSlide>
        </Swiper>
    )
}