import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Box component="section" className="video-section">
        <Box className="bg bg-image" style={{ backgroundImage: "url(images/background/1.jpg)" }}></Box>
        <Container>
          <Grid container>
            <Grid item lg={9} md={12} sm={12}>
              <Box className="inner-column">
                <Box className="sec-title-two light wow slideInUp">
                  <span className="sub-title">Promotional Video</span>
                  <Typography variant="h2">
                    {" "}
                    Book Hotal Rooms, <br />
                    et Deals & Book Flights Online.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={3} md={12} sm={12}>
              <Box className="inner-column">
                <a onClick={() => setOpen(true)} className="play-now-two">
                  <img src="images/icons/play.png" alt="" />
                  <span className="ripple"></span>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
    </>
  );
}
