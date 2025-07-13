import Link from "next/link";
import React from "react";
import BackToTop from "../elements/BackToTop";
import Image from "next/image";
import LogoDark from "./../../public/images/logo-2.png";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

const Footer1 = () => {
  return (
    <>
      <Box component="footer" className="main-footer footer-style-two">
        <Box className="widgets-section">
          <Container>
            <Grid container spacing={4}>
              <Grid item xl={3} sm={6}>
                <Box className="footer-widget about-widget">
                  <Box className="logo">
                    <Link href="/">
                      <Image src={LogoDark} title="Hoexr" alt="" />
                    </Link>
                  </Box>
                  <Typography className="text">
                    Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan volutpat.
                  </Typography>
                  <Box component="ul" className="social-icon-two">
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} sm={6}>
                <Box className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                  <Typography variant="h4" className="widget-title">
                    Services Links
                  </Typography>
                  <Box className="widget-content">
                    <Box component="ul" className="user-links">
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Home
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Suites
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Restaurant
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>News
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>About Hotel
                        </Link>
                      </li>
                    </Box>
                    <Box component="ul" className="user-links">
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Rooms
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Wellness
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Spa
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Gallery
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <i className="fa-solid fa-crosshairs"></i>FAQ
                        </Link>
                      </li>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} sm={6}>
                <Box className="footer-widget news-widget wow fadeInLeft" data-wow-delay="300ms">
                  <Typography variant="h4" className="widget-title">
                    Latest News
                  </Typography>
                  <Box className="news-info">
                    <figure className="image overlay-anim">
                      <Link href="#">
                        <img src="images/resource/news-info-1.jpg" alt="" />
                      </Link>
                    </figure>
                    <Typography variant="h6" className="title">
                      <Link href="#" title="">
                        Quisque at Felis <br />
                        Port Titordga
                      </Link>
                    </Typography>
                    <span className="date">14 May 2023</span>
                  </Box>
                  <Box className="news-info">
                    <figure className="image overlay-anim">
                      <Link href="#">
                        <img src="images/resource/news-info-2.jpg" alt="" />
                      </Link>
                    </figure>
                    <Typography variant="h6" className="title">
                      <Link href="#" title="">
                        Tips For Picking <br />
                        Vacation
                      </Link>
                    </Typography>
                    <span className="date">14 May 2023</span>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={3} sm={6}>
                <Box className="footer-widget info-widget wow fadeInLeft" data-wow-delay="300ms">
                  <Typography variant="h4" className="widget-title">
                    Information
                  </Typography>
                  <Box className="widget-content">
                    <article className="recent-post">
                      <Box className="inner">
                        <Typography className="post-info">
                          <i className="fas fa-phone"></i> 1800-121-3637
                        </Typography>
                        <Typography className="post-info">+91-7052-101-786</Typography>
                        <Typography className="post-info">
                          <i className="fa fa-envelope"></i> info@example.com
                        </Typography>
                        <Typography className="post-info">
                          <i className="fas fa-location"></i> 1247/Plot No. 39, 15th Phase, <br />
                          United States of America
                        </Typography>
                      </Box>
                    </article>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box className="footer-bottom">
          <Container>
            <Box className="inner-container">
              <Typography className="copyright-text">&copy; Copyright Reserved by kodesolution.com</Typography>
              <BackToTop />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer1;
