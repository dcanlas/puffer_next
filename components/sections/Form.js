"use client";
import React from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  styled,
} from "@mui/material";
import {
  Wifi as WifiIcon,
  Hotel as HotelIcon,
  Bathtub as BathtubIcon,
  Shower as ShowerIcon,
  AcUnit as AcUnitIcon,
  Landscape as LandscapeIcon,
} from "@mui/icons-material";
import Lookup from "@/components/custom/Lookup";

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  letterSpacing: "2px",
  marginBottom: theme.spacing(1),
}));

const AmenitiesList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const AmenityItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1, 0),
}));

const AmenityIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 40,
  color: theme.palette.secondary.main,
}));

export default function Form() {
  return (
    <>
      <Lookup />
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: "100%" }}>
                <SubTitle variant="subtitle1">BOOK YOUR STAY</SubTitle>
                <Typography variant="h2" gutterBottom>
                  Check Availability
                </Typography>
                <Typography variant="body1" paragraph>
                  Find the perfect room for your stay at our hotel. We offer a variety of rooms to suit your needs, from
                  budget-friendly fan rooms to comfortable air-conditioned suites.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <SubTitle variant="subtitle1" sx={{ color: "secondary.main" }}>
                  OUR AMENITIES
                </SubTitle>
                <Typography variant="h2" gutterBottom>
                  What We Offer
                </Typography>
                <AmenitiesList>
                  <AmenityItem>
                    <AmenityIcon>
                      <WifiIcon />
                    </AmenityIcon>
                    <ListItemText primary="Free WiFi" />
                  </AmenityItem>
                  <AmenityItem>
                    <AmenityIcon>
                      <HotelIcon />
                    </AmenityIcon>
                    <ListItemText primary="Comfortable Beds" />
                  </AmenityItem>
                  <AmenityItem>
                    <AmenityIcon>
                      <BathtubIcon />
                    </AmenityIcon>
                    <ListItemText primary="Private Bathrooms" />
                  </AmenityItem>
                  <AmenityItem>
                    <AmenityIcon>
                      <ShowerIcon />
                    </AmenityIcon>
                    <ListItemText primary="Hot Showers" />
                  </AmenityItem>
                  <AmenityItem>
                    <AmenityIcon>
                      <AcUnitIcon />
                    </AmenityIcon>
                    <ListItemText primary="Air Conditioning (in AC rooms)" />
                  </AmenityItem>
                  <AmenityItem>
                    <AmenityIcon>
                      <LandscapeIcon />
                    </AmenityIcon>
                    <ListItemText primary="Mountain View" />
                  </AmenityItem>
                </AmenitiesList>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
}
