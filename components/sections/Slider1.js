"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import Lookup from "../custom/Lookup";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const BannerSection = styled(Box)(({ theme }) => ({
  position: "relative",
  "& .swiper": {
    width: "100%",
    height: "100vh",
  },
  "& .swiper-slide": {
    position: "relative",
  },
}));

const SlideImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: theme.palette.common.white,
  zIndex: 1,
  width: "100%",
  padding: theme.spacing(2),
  "& h1": {
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    marginBottom: theme.spacing(3),
  },
}));

const NavigationButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  cursor: "pointer",
  color: theme.palette.common.white,
  "&.prev": {
    left: theme.spacing(2),
  },
  "&.next": {
    right: theme.spacing(2),
  },
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const sliderDetails = [
  {
    imgSrc: "images/banner/back-sand.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Beachfront Resort",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/front-day-1.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Comfortable and Peaceful Stay",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/day-mid-2.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Feel the Sand Between your Toes",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/secondfloor-one.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Activities for All",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/back-angled-1.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Soak in the Sun",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/front-night.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "Sing the Night Away",
    linkTo: null,
  },
  {
    imgSrc: "images/banner/secondfloor-two.jpg",
    alt: "Picture from beach towards resort",
    subtitle: "A Slice of Paradise",
    linkTo: null,
  },
];

export default function Slider1() {
  return (
    <BannerSection>
      <Swiper {...swiperOptions} className="banner-slider">
        {sliderDetails.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SlideImage src={item.imgSrc} alt={item.alt} />
            <ContentBox>
              <Typography variant="h1" component="h1" data-animation-in="fadeInUp" data-delay-in="0.3">
                {item.subtitle}
              </Typography>
              {item.linkTo && (
                <Button
                  component={Link}
                  href="/page-about"
                  variant="contained"
                  color="secondary"
                  size="large"
                  data-animation-in="fadeInUp"
                  data-delay-in="0.5"
                >
                  rooms & suites
                </Button>
              )}
            </ContentBox>
          </SwiperSlide>
        ))}
        <NavigationButton className="prev h1p">
          <span className="fa fa-long-arrow-alt-left" />
        </NavigationButton>
        <NavigationButton className="next h1n">
          <span className="fa fa-long-arrow-alt-right" />
        </NavigationButton>
      </Swiper>
      <Lookup />
    </BannerSection>
  );
}
