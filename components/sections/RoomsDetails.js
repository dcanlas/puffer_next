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
import RoomPhotoGallery from "./RoomPhotoGallery";
import AboutTheResort from "./AboutTheResort";

export default function RoomDetails({ room }) {
  return (
    <>
      <Box component="section" className="blog-details pt-120 pb-120">
        <Container className="main-container">
          <Box className="title-outer text-center" sx={{ mb: 4 }}>
            <Typography variant="h1" className="title">
              {room.name}
            </Typography>
          </Box>

          {/* Full width photo gallery */}
          <Box sx={{ mb: 3 }}>
            <RoomPhotoGallery roomType={room.type} />
          </Box>

          <Grid container spacing={4}>
            <Grid item xl={8} lg={7}>
              <Box className="room-details__left">
                <Box className="wrapper">
                  <Typography variant="h3">Description of Room</Typography>
                  <Typography
                    className="text"
                    sx={{
                      whiteSpace: "pre-line",
                      lineHeight: 1.6,
                    }}
                  >
                    {room.description}
                  </Typography>
                  <Grid container justifyContent="center">
                    <Grid item xl={12}>
                      <Box className="room-details__content-right mb-40 mt-20">
                        <Box className="room-details__details-box">
                          <Grid container>
                            <Grid item xs={6} md={3}>
                              <Typography className="text mb-0">Bathroom</Typography>
                              <Typography variant="h6" className="title">
                                {room.bathroom}
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
                  <Typography variant="h3" mb={2}>
                    Room Amenities
                  </Typography>
                  <Grid container spacing={2} className="room-facility-list mb-40">
                    {room.amenities &&
                      room.amenities.map((amenity, index) => (
                        <Grid item sm={6} xl={4} key={index}>
                          <Box className="list-one d-flex align-items-center me-sm-4 mb-3">
                            <Box className="icon text-theme-color1 mr-10 flex-shrink-0">
                              <i className={amenity.icon}></i>
                            </Box>
                            <Typography variant="h6" className="title m-0">
                              {amenity.label}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                  </Grid>
                </Box>

                {/* About the Resort Section */}
                <Box sx={{ mt: 6, mb: 4 }}>
                  <AboutTheResort showContainer={false} />
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
                            <Select
                              className="form-select form-control bg-white"
                              defaultValue=""
                              MenuProps={{
                                disableScrollLock: true,
                              }}
                            >
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
