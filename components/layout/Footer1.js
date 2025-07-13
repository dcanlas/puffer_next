import Link from "next/link";
import React from "react";
import BackToTop from "../elements/BackToTop";
import Image from "next/image";
import Logo from "./../../public/images/resort-logo-horizontal.png";
import { Box, Container, Grid, Typography, Button, TextField } from "@mui/material";

const Footer1 = () => {
  return (
    <>
      <Box component="footer" className="main-footer footer-style-one">
        <Box className="widgets-section">
          <Container>
            <Grid container spacing={4}>
              <Grid item xl={3} sm={6}>
                <Box className="footer-widget about-widget">
                  <Box className="logo">
                    <Link href="/">
                      <Image width={150} height={50} src={Logo} alt="Puffer Isle Resort Logo" />
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
              <Grid item lg={2} sm={6}>
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
                          <i className="fa-solid fa-crosshairs"></i>Rooms & Suites
                        </Link>
                      </li>
                      <li>
                        <Link href="/amenities">
                          <i className="fa-solid fa-crosshairs"></i>Amenities
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>Spa & Wellness
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa-solid fa-crosshairs"></i>About Hotel
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
              <Grid item lg={3} sm={6}>
                <Box className="footer-widget news-widget wow fadeInLeft" data-wow-delay="400ms">
                  <Typography variant="h4" className="widget-title">
                    Newsletter
                  </Typography>
                  <Typography className="text">Lorem ipsum dolor sit amet consectetur Augue id fermentum</Typography>
                  <Box className="subscribe-form-three">
                    <form method="post" action="#">
                      <Box className="form-group">
                        <TextField
                          type="email"
                          name="email"
                          className="email"
                          placeholder="Email Address"
                          required
                          variant="standard"
                          fullWidth
                        />
                        <Button type="button" className="theme-btn btn-style-one">
                          <span className="btn-title">
                            <i className="fa fa-paper-plane"></i>
                          </span>
                        </Button>
                      </Box>
                    </form>
                  </Box>
                  <Typography className="text">
                    <i className="fa-regular fa-circle-check"></i>I agree to all terms and policies
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer1;
