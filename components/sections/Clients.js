'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
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
    },

    breakpoints:{
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}

export default function Clients({ addClass }) {
    return (
        <>
            <section className={'client-section-two ${addClass}'}>
                <div className="auto-container">
                    <Swiper {...swiperOptions} className="client-slider">
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-1.png" alt=""/></Link>
                        </SwiperSlide>
                        {/*Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-2.png" alt=""/></Link>
                        </SwiperSlide>
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-3.png" alt=""/></Link>
                        </SwiperSlide>
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-4.png" alt=""/></Link>
                        </SwiperSlide>
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-5.png" alt=""/></Link>
                        </SwiperSlide>
                        {/* Slide Item */}
                        <SwiperSlide className="slide-item client-block-two">
                            <Link href="/#"><img src="images/resource/client1-1.png" alt=""/></Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
