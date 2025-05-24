"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  InputAdornment,
  useScrollTrigger,
  Slide,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import Logo from "./../../public/images/resort-logo-horizontal.png";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  transition: "all 0.3s ease",
  "&.scrolled": {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  padding: theme.spacing(2, 0),
}));

const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const Header1 = ({ handleMobileMenu, searchToggle, handleToggle, scroll }) => {
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <StyledAppBar position="fixed" className={scroll ? "scrolled" : ""}>
          <Container maxWidth="lg">
            <StyledToolbar>
              <LogoBox>
                <Link href="/">
                  <Image width={150} height={50} src={Logo} alt="Puffer Isle Resort Logo" />
                </Link>
              </LogoBox>

              <NavBox>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <NavLinks />
                </Box>
                <Button
                  component={Link}
                  href="/check-availability"
                  variant="contained"
                  color="secondary"
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  Book Now
                </Button>
                <IconButton color="inherit" onClick={handleMobileMenu} sx={{ display: { md: "none" } }}>
                  <MenuIcon />
                </IconButton>
              </NavBox>
            </StyledToolbar>
          </Container>
        </StyledAppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={searchToggle}
        onClose={handleMobileMenu}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 400 },
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <Link href="/">
            <Image width={150} height={50} src={Logo} alt="Puffer Isle Resort Logo" />
          </Link>
          <IconButton onClick={handleMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Box>

        <MobileMenu />

        <List>
          <ListItem>
            <ContactInfoBox>
              <PhoneIcon />
              <Box>
                <Typography variant="subtitle2">Call Now</Typography>
                <Link href="tel:+639123456789" style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography>+63 (912) 345-6789</Typography>
                </Link>
              </Box>
            </ContactInfoBox>
          </ListItem>
          <ListItem>
            <ContactInfoBox>
              <EmailIcon />
              <Box>
                <Typography variant="subtitle2">Send Email</Typography>
                <Link href="mailto:bookings@pufferisle.com" style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography>bookings@pufferisle.com</Typography>
                </Link>
              </Box>
            </ContactInfoBox>
          </ListItem>
          <ListItem>
            <ContactInfoBox>
              <AccessTimeIcon />
              <Box>
                <Typography variant="subtitle2">Opening Hours</Typography>
                <Typography>Check-in: 2:00 PM, Check-out: 12:00 PM</Typography>
              </Box>
            </ContactInfoBox>
          </ListItem>
        </List>

        <SocialLinks>
          <IconButton component={Link} href="https://facebook.com/pufferisle" target="_blank">
            <i className="fab fa-facebook-f" />
          </IconButton>
          <IconButton component={Link} href="https://instagram.com/pufferisle" target="_blank">
            <i className="fab fa-instagram" />
          </IconButton>
        </SocialLinks>
      </Drawer>

      <Drawer
        anchor="top"
        open={searchToggle}
        onClose={handleToggle}
        PaperProps={{
          sx: {
            p: 3,
            backgroundColor: "background.paper",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton onClick={handleToggle} sx={{ position: "absolute", right: 0, top: 0 }}>
            <CloseIcon />
          </IconButton>
          <TextField
            fullWidth
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Drawer>
    </>
  );
};

export default Header1;
