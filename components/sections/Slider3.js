'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
}

export default function Slider3() {
  return (
    <>

      <section className="banner-section">
        <div class="product-details rd-page">
          <div class="testimonials bxslider">
            <div class="swiper-container testimonial-content-home5">
              <Swiper {...swiperOptions} className="banner-slider owl-carousel owl-theme default-navs">
                {/* Slide Item */}
                <SwiperSlide className="testimonial-block-home5">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="/images/resource/room-1.jpg" alt=""></figure></div>
                  </div>
                </SwiperSlide>
                {/* Slide Item */}
                <SwiperSlide className="banner-slide slide-item">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="/images/resource/room-2.jpg" alt=""></figure></div>
                  </div>
                </SwiperSlide>
                {/* Slide Item */}
                <SwiperSlide className="banner-slide slide-item">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="/images/resource/room-4.jpg" alt=""></figure></div>
                  </div>
                </SwiperSlide>
                {/* Slide Item */}
                <SwiperSlide className="banner-slide slide-item">
                  <div className="inner-box">
                    <div className="image-box"><figure className="image"><img src="/images/resource/room-6.jpg" alt=""></figure></div>
                  </div>
                </SwiperSlide>
                <div className="owl-nav" style={{zIndex:"999"}}>
                  <div className="owl-prev h1p">
                    <span className="fa fa-long-arrow-alt-left" />
                  </div>
                  <div className="owl-next h1n">
                    <span className="fa fa-long-arrow-alt-right" />
                  </div>
                </div>
              </Swiper>
            </div>

            <!-- It is also required to set watchSlidesProgress prop -->
            <div className="swiper-container testimonial-thumbs-home5">
              <div className="swiper-wrapper">
                <swiper {...swiperOptions} className="thumb-box ms-0"
                  :slides-per-view="4"
                  :modules="[Thumbs]"
                  watch-slides-progress
                  @swiper="setThumbsSwiper"
                  :space-between="10">
                  <swiper-slide className="testimonial-thumb"><figure className="image item"><img src="/images/resource/room-1.jpg" alt=""></figure></swiper-slide>
                  <swiper-slide className="testimonial-thumb"><figure className="image item"><img src="/images/resource/room-2.jpg" alt=""></figure></swiper-slide>
                  <swiper-slide className="testimonial-thumb"><figure className="image item"><img src="/images/resource/room-4.jpg" alt=""></figure></swiper-slide>
                  <swiper-slide className="testimonial-thumb"><figure className="image item"><img src="/images/resource/room-6.jpg" alt=""></figure></swiper-slide>
                </swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
