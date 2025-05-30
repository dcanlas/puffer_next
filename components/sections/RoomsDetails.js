import Link from "next/link";
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function RoomDetails({ room }) {
  return (
    <>
      <Box component="section" className="blog-details pt-120 pb-120">
        <Container className="main-container">
          <Box className="title-outer text-center">
            <Typography variant="h1" className="title">
              {room.name}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xl={8} lg={7}>
              <Box className="testimonial-block-home5 mb-50">
                <Box className="inner-box">
                  <Box className="image-box">
                    <figure className="image">
                      <img className="w-100" src="/images/resource/room-1.jpg" alt="" />
                    </figure>
                  </Box>
                </Box>
              </Box>
              <Box className="room-details__left">
                <Box className="wrapper">
                  <Typography variant="h3">Description of Room</Typography>
                  <Typography className="text">{room.description}</Typography>
                  <Grid container justifyContent="center">
                    <Grid item xl={12}>
                      <Box className="room-details__content-right mb-40 mt-20">
                        <Box className="room-details__details-box">
                          <Grid container>
                            <Grid item xs={6} md={3}>
                              <Typography className="text mb-0">Room Size</Typography>
                              <Typography variant="h6" className="title">
                                600Sq
                              </Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Typography className="text mb-0">Beds</Typography>
                              <Typography variant="h6" className="title">
                                {room.beds}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Typography className="text mb-0">Occupancy</Typography>
                              <Typography variant="h6" className="title">
                                {room.occupancy}
                              </Typography>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Typography className="text mb-0">View</Typography>
                              <Typography variant="h6" className="title">
                                {room.view}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box mt={5}>
                  <Typography variant="h3">Room Amenities</Typography>
                  <Grid container spacing={2} className="room-facility-list mb-40">
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="far fa-air-conditioner"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Air Conditionar
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="far fa-swimming-pool"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Swiming Pool
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="far fa-dumbbell"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Gymnasium
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="fas fa-parking-circle"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Parking
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="far fa-shield-check"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Security
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xl={4}>
                      <Box className="list-one d-flex align-items-center me-sm-4">
                        <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                          <i className="far fa-child"></i>
                        </Box>
                        <Typography variant="h6" className="title m-0">
                          Playground
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="d-sm-flex align-items-sm-center justify-content-sm-between pt-40 pb-40 border-top">
                  <Typography variant="h6" className="my-sm-0">
                    Share Details
                  </Typography>
                  <Box className="blog-details__social-list">
                    <Link href="news-details">
                      <i className="fab fa-twitter"></i>
                    </Link>{" "}
                    <Link href="news-details">
                      <i className="fab fa-facebook"></i>
                    </Link>{" "}
                    <Link href="news-details">
                      <i className="fab fa-pinterest-p"></i>
                    </Link>{" "}
                    <Link href="news-details">
                      <i className="fab fa-instagram"></i>
                    </Link>{" "}
                  </Box>
                </Box>
                <Box className="p-4 p-lg-5 bg-light">
                  <Typography variant="h4" className="mt-0">
                    Send Us Your Question
                  </Typography>
                  <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                    <Grid container spacing={2}>
                      <Grid item sm={6} xl={4}>
                        <Box className="mb-3">
                          <TextField
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Enter Name"
                            fullWidth
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={6} xl={4}>
                        <Box className="mb-3">
                          <TextField
                            name="form_email"
                            className="form-control bg-white required email"
                            type="email"
                            placeholder="Enter Email"
                            fullWidth
                          />
                        </Box>
                      </Grid>
                      <Grid item xl={4}>
                        <Box className="mb-3">
                          <TextField
                            name="form_phone"
                            className="form-control bg-white required phone"
                            type="number"
                            placeholder="Enter Phone"
                            fullWidth
                          />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className="mb-3">
                      <TextField
                        name="form_message"
                        className="form-control bg-white required"
                        multiline
                        rows={5}
                        placeholder="Enter Message"
                        fullWidth
                      />
                    </Box>
                    <Box className="mb-0">
                      <input name="form_botcheck" className="form-control" type="hidden" value="" />
                      <Button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait...">
                        <span className="btn-title">Submit Comment</span>
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
            <Grid item xl={4} lg={5}>
              <Box className="sidebar">
                <Box className="sidebar__post mb-30">
                  <form id="contact_form2" name="contact_form" className="" action="#" method="post">
                    <Grid container spacing={2}>
                      <Grid item sm={12}>
                        <Box className="mb-3">
                          <InputLabel className="form-label">Check In</InputLabel>
                          <TextField
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Arrive Date"
                            fullWidth
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12}>
                        <Box className="mb-3">
                          <InputLabel className="form-label">Check Out</InputLabel>
                          <TextField
                            name="form_name"
                            className="form-control bg-white"
                            type="text"
                            placeholder="Departure Date"
                            fullWidth
                          />
                        </Box>
                      </Grid>
                      <Grid item sm={12}>
                        <Box className="mb-3">
                          <InputLabel className="form-label">Guests</InputLabel>
                          <FormControl fullWidth>
                            <Select className="form-select form-control bg-white" defaultValue="">
                              <MenuItem value="" disabled>
                                Select
                              </MenuItem>
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                              <MenuItem value={5}>More</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box className="mb-3">
                      <input name="form_botcheck" className="form-control" type="hidden" value="" />
                      <Button
                        type="submit"
                        className="theme-btn btn-style-one w-100"
                        data-loading-text="Please wait..."
                        fullWidth
                      >
                        <span className="btn-title">Book Now</span>
                      </Button>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
