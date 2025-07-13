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
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.secondary.dark}`,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 80,
  [theme.breakpoints.down("md")]: {
    minHeight: 64,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const NavSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  flex: 1,
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CenterLogo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 140,
  minHeight: 48,
}));

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    position: "absolute",
    left: theme.spacing(1),
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
  color: theme.palette.secondary.contrastText,
  fontWeight: 500,
  fontFamily: '"FinkHeavy-Medium", "Roboto", "Helvetica", "Arial", sans-serif',
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
  },
}));

const Header1 = ({ handleMobileMenu, searchToggle, handleToggle, scroll }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  // Left and right nav links
  const leftLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
  ];
  const rightLinks = [
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <StyledToolbar>
          {/* Mobile menu button */}
          <MobileMenuButton edge="start" onClick={handleDrawerToggle} aria-label="menu">
            <MenuIcon />
          </MobileMenuButton>

          {/* Left nav links */}
          <NavSection sx={{ justifyContent: "flex-start" }}>
            {leftLinks.map((link) => (
              <NavButton key={link.label} component={Link} href={link.href}>
                {link.label}
              </NavButton>
            ))}
          </NavSection>

          {/* Centered logo */}
          <CenterLogo>
            <Link href="/">
              <Image width={140} height={48} src={Logo} alt="Puffer Isle Resort Logo" />
            </Link>
          </CenterLogo>

          {/* Right nav links */}
          <NavSection sx={{ justifyContent: "flex-end" }}>
            {rightLinks.map((link) => (
              <NavButton key={link.label} component={Link} href={link.href}>
                {link.label}
              </NavButton>
            ))}
          </NavSection>
        </StyledToolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
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
            {[...leftLinks, ...rightLinks].map((link) => (
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
