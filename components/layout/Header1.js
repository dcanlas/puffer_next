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
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
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
  color: theme.palette.primary.contrastText,
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

const Header1 = ({ handleMobileMenu, searchToggle, handleToggle, scroll }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  // Left and right nav links
  const leftLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/rooms" },
    { label: "Dining", href: "/dining" },
  ];
  const rightLinks = [
    { label: "Experiences", href: "/experiences" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
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
              <Button key={link.label} component={Link} href={link.href} sx={{ color: "white", fontWeight: 500 }}>
                {link.label}
              </Button>
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
              <Button key={link.label} component={Link} href={link.href} sx={{ color: "white", fontWeight: 500 }}>
                {link.label}
              </Button>
            ))}
          </NavSection>
        </StyledToolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Link href="/">
              <Image width={120} height={40} src={Logo} alt="Puffer Isle Resort Logo" />
            </Link>
          </Box>
          {[...leftLinks, ...rightLinks].map((link) => (
            <Button
              key={link.label}
              component={Link}
              href={link.href}
              sx={{ color: "#1a237e", fontWeight: 500, width: "100%", justifyContent: "flex-start", mb: 1 }}
              onClick={handleDrawerToggle}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header1;
