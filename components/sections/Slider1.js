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

const sliderDetails = [
  {
    imgSrc: 'images/banner/day-backshot.jpg',
    alt: 'Picture from beach towards resort',
    subtitle: 'Peaceful and chill',
    linkTo: null
  },
  {
    imgSrc: 'images/banner/front-night.jpg',
    alt: 'Picture from beach towards resort',
    subtitle: 'Peaceful and chill',
    linkTo: null
  },
  {
    imgSrc: 'images/banner/night-backshot.jpg',
    alt: 'Picture from beach towards resort',
    subtitle: 'Peaceful and chill',
    linkTo: null
  },
  {
    imgSrc: 'images/banner/secondfloor-one.jpg',
    alt: 'Picture from beach towards resort',
    subtitle: 'Peaceful and chill',
    linkTo: null
  },
  {
    imgSrc: 'images/banner/secondfloor-two.jpg',
    alt: 'Picture from beach towards resort',
    subtitle: 'Peaceful and chill',
    linkTo: null
  },
]

export default function Slider1() {
  return (
    <>
      <section className="banner-section">
        <Swiper {...swiperOptions} className="banner-slider owl-carousel owl-theme default-navs">
          {/* Slide Item */}
          {sliderDetails.map((item, idx) => {
            return (
              <SwiperSlide className="banner-slide slide-item" key={idx}>
                <figure className="image"><img src={item.imgSrc} alt={item.alt} /></figure>
                <div className="content-box">
                  <span className="sub-title" data-animation-in="fadeInUp" data-delay-in="0.1">{item.subtitle}</span>
                  <h1 data-animation-in="fadeInUp" data-delay-in="0.3">life enjoy with <br/>the great moments</h1>
                  {item.linkTo && (
                  <Link href="/page-about" className="btn" data-animation-in="fadeInUp" data-delay-in="0.5">rooms & suites</Link>
                  )}
                </div>
              </SwiperSlide>
            ) 
          })}
          {/* Slide Item */}
          <div className="owl-nav" style={{zIndex:"999"}}>
            <div className="owl-prev h1p">
              <span className="fa fa-long-arrow-alt-left" />
            </div>
            <div className="owl-next h1n">
              <span className="fa fa-long-arrow-alt-right" />
            </div>
          </div>
        </Swiper>
        <div className="checkout-form-section wow slideInUp">
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
