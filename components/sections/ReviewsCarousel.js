"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Container, Typography, Grid, Paper, styled, useTheme, useMediaQuery } from "@mui/material";
import { REVIEWS_SLIDES, REVIEWS_SLIDES_MOBILE } from "@/constants/reviews-data";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const ReviewsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  width: "100%",
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(6),
  color: theme.palette.primary.main,
  fontWeight: 600,
  padding: theme.spacing(0, 2),
}));

const ReviewImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: 300,
  objectFit: "cover",
  borderRadius: theme.spacing(1),
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const CustomSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 3),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
  },
  "& .swiper-pagination": {
    bottom: "-50px",
    "& .swiper-pagination-bullet": {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.3,
      "&.swiper-pagination-bullet-active": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  "& .swiper-button-next, & .swiper-button-prev": {
    color: theme.palette.accent.navy,
    "&:after": {
      fontSize: "24px",
      fontWeight: "bold",
    },
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default function ReviewsCarousel() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const slidesToShow = isMobile ? REVIEWS_SLIDES_MOBILE : REVIEWS_SLIDES;

  return (
    <ReviewsSection>
      <SectionTitle variant="h2" component="h2">
        Our Guests Love Us
      </SectionTitle>

      <CustomSwiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            spaceBetween: 30,
            slidesPerView: 1,
          },
        }}
      >
        {slidesToShow.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 4 }} justifyContent="center">
                {slide.map((image, imageIndex) => (
                  <Grid item xs={12} sm={isMobile ? 12 : 6} md={4} key={imageIndex}>
                    <Paper elevation={2} sx={{ overflow: "hidden", borderRadius: 2 }}>
                      <ReviewImage src={image} alt={`Guest review ${slideIndex + 1}-${imageIndex + 1}`} />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </ReviewsSection>
  );
}
