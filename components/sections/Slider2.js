"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Container, Typography, Button, Grid, Paper, TextField, MenuItem, styled } from "@mui/material";
import { CalendarToday, ArrowBack, ArrowForward } from "@mui/icons-material";

// Initialize Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const BannerSection = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  minHeight: "60vh",
  backgroundColor: theme.palette.background.default,
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
  [theme.breakpoints.down("md")]: {
    top: "60%",
  },
}));

const NavigationButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  cursor: "pointer",
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
  borderRadius: "50%",
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[2],
  "&.prev": {
    left: theme.spacing(2),
  },
  "&.next": {
    right: theme.spacing(2),
  },
  "&:hover": {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.dark,
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
    nextEl: ".h2n",
    prevEl: ".h2p",
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

export default function Slider2() {
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
        <NavigationButton className="prev h2p">
          <ArrowBack />
        </NavigationButton>
        <NavigationButton className="next h2n">
          <ArrowForward />
        </NavigationButton>
      </Swiper>
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2, background: "rgba(255,255,255,0.95)" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">Check in</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="20 June, 2023"
                InputProps={{
                  startAdornment: <CalendarToday sx={{ mr: 1 }} fontSize="small" />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">Check out</Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="20 June, 2023"
                InputProps={{
                  startAdornment: <CalendarToday sx={{ mr: 1 }} fontSize="small" />,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle2">Room</Typography>
              <TextField
                select
                fullWidth
                variant="outlined"
                defaultValue="Standard Room Size"
                SelectProps={{
                  MenuProps: {
                    disableScrollLock: true,
                  },
                }}
              >
                <MenuItem value="Standard Room Size">Standard Room Size</MenuItem>
                <MenuItem value="Deluxe Room Size">Deluxe Room Size</MenuItem>
                <MenuItem value="Family Room Size">Family Room Size</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                component={Link}
                href=""
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
              >
                check now
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </BannerSection>
  );
}
