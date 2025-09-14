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
  Typography,
  styled,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, Phone as PhoneIcon, Email as EmailIcon } from "@mui/icons-material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#f5f5dc", // Light yellow/beige background
  color: "#2d4a52", // Dark blue text
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderBottom: "none",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 80,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  gap: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    minHeight: 64,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    gap: theme.spacing(1),
  },
}));

const NavSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  flex: 1,
  justifyContent: "flex-start",
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("lg")]: {
    gap: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: "#2d4a52",
  display: "none",
  [theme.breakpoints.down("xl")]: {
    display: "block",
    position: "absolute",
    left: theme.spacing(1),
    zIndex: 2,
  },
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

const NavButton = styled(Button)(({ theme }) => ({
  color: "#2d4a52",
  fontWeight: 500,
  fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
  textTransform: "none",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "#1a3a42",
    backgroundColor: "transparent",
  },
}));

const BookNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2d4a52",
  color: "white",
  fontWeight: 700,
  fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
  textTransform: "none",
  padding: theme.spacing(1.5, 4),
  borderRadius: 8,
  whiteSpace: "nowrap",
  minWidth: "fit-content",
  "&:hover": {
    backgroundColor: "#1a3a42",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1, 2),
    fontSize: "0.875rem",
  },
}));

const Header1 = ({ handleMobileMenu, searchToggle, handleToggle, scroll }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  // All navigation links (centered)
  const navLinks = [
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Home", href: "/" },
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth={false} sx={{ position: "relative" }}>
        <StyledToolbar>
          {/* Mobile menu button */}
          <MobileMenuButton edge="start" onClick={handleDrawerToggle} aria-label="menu">
            <MenuIcon />
          </MobileMenuButton>

          {/* Logo and navigation section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              marginLeft: { xs: 6, xl: 0 }, // Add left margin on mobile to avoid hamburger overlap
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: { xs: 2, md: 4 },
                flexShrink: 0,
                minWidth: { xs: 120, md: 140 },
              }}
            >
              <Link href="/">
                <Image
                  src="/images/resort-logo-horizontal.png"
                  alt="Puffer Isle Resort Logo"
                  width={140}
                  height={48}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "140px",
                    minWidth: "120px",
                  }}
                />
              </Link>
            </Box>

            {/* Navigation links */}
            <NavSection sx={{ flex: 1, marginLeft: 0 }}>
              {navLinks.map((link) => (
                <NavButton key={link.label} component={Link} href={link.href}>
                  {link.label}
                </NavButton>
              ))}
            </NavSection>
          </Box>

          {/* BOOK NOW button on right */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              marginLeft: { xs: 1, sm: 2 },
            }}
          >
            <BookNowButton component={Link} href="/check-availability">
              BOOK NOW
            </BookNowButton>
          </Box>
        </StyledToolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        disableScrollLock={true}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box sx={{ width: 280, p: 3, backgroundColor: "#82d0dd", height: "100%" }}>
          {/* Mobile menu header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" sx={{ fontFamily: '"FinkHeavy-Medium"', color: "#2d4a52" }}>
              Puffer Resort
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#2d4a52" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Contact info */}
          <ContactInfoBox>
            <PhoneIcon sx={{ color: "#2d4a52", fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: "#2d4a52" }}>
              +1 (555) 123-4567
            </Typography>
          </ContactInfoBox>

          <ContactInfoBox>
            <EmailIcon sx={{ color: "#2d4a52", fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: "#2d4a52" }}>
              info@pufferresort.com
            </Typography>
          </ContactInfoBox>

          {/* Mobile navigation */}
          <List sx={{ mt: 3 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <Button
                  component={Link}
                  href={link.href}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    py: 1.5,
                    color: "#2d4a52",
                    fontFamily: '"FinkHeavy-Medium"',
                    "&:hover": { backgroundColor: "rgba(45, 74, 82, 0.1)" },
                  }}
                  onClick={handleDrawerToggle}
                >
                  {link.label}
                </Button>
              </ListItem>
            ))}
          </List>

          {/* Social links */}
          <SocialLinks>
            <IconButton sx={{ color: "#2d4a52" }}>
              <i className="fab fa-facebook" />
            </IconButton>
            <IconButton sx={{ color: "#2d4a52" }}>
              <i className="fab fa-instagram" />
            </IconButton>
            <IconButton sx={{ color: "#2d4a52" }}>
              <i className="fab fa-twitter" />
            </IconButton>
          </SocialLinks>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header1;
