'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

export default function Slider2() {
  return (
    <>

      <section className="banner-section">
        <Swiper {...swiperOptions} className="banner-slider owl-carousel owl-theme default-navs">
          {/* Slide Item */}
          <SwiperSlide className="banner-slide slide-item">
            <figure className="image"><img src="images/banner/banner-1.jpg" alt=""/></figure>
            <div className="content-box">
              <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
              <h1 data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br/>the great moments</h1>
              <Link href="/page-about" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">rooms & suites</Link>
            </div>
          </SwiperSlide>
          {/* Slide Item */}
          <SwiperSlide className="banner-slide slide-item">
            <figure className="image"><img src="images/banner/banner-2.jpg" alt=""/></figure>
            <div className="content-box">
              <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">unique place and luxury hotel</span>
              <h1 data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br/>the great moments</h1>
              <Link href="/page-about" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">rooms & suites</Link>
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
        <div className="checkout-form-section v2 wow slideInUp">
          <div className="auto-container">
            <div className="checkout-form">
              <div className="checkout-field">
                <h6>Check in</h6>
                <div className="chk-field">
                  <input className="date-pick" type="text" placeholder="20 June, 2023" />
                  <i className="fa fa-calendar"></i>
                </div>
              </div>
              <div className="checkout-field">
                <h6>Check out</h6>
                <div className="chk-field">
                  <input className="date-pick" type="text" placeholder="20 June, 2023" />
                  <i className="fa fa-calendar"></i>
                </div>
              </div>
              <div className="checkout-field br-0">
                <h6>Room</h6>
                <div className="chk-field">
                  <i className="fa fa-angle-down"></i>
                  <select>
                    <option>Standard Room Size </option>
                    <option>Standard Room Size </option>
                    <option>Standard Room Size </option>
                    <option>Standard Room Size </option>
                  </select>
                </div>
              </div>
              <Link href="" className="theme-btn btn-style-one"><span className="btn-title">check now</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
