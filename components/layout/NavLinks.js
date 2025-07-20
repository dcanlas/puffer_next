"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import { Home as HomeIcon, Hotel as HotelIcon, EventAvailable as EventAvailableIcon } from "@mui/icons-material";

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.secondary.main,
  },
}));

const NavLinks = ({ extraClassName }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer className={extraClassName}>
      <NavButton component={Link} href="/" startIcon={<HomeIcon />}>
        Home
      </NavButton>

      <NavButton onClick={handleClick} startIcon={<HotelIcon />}>
        Rooms
      </NavButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem component={Link} href="/check-availability" onClick={handleClose}>
          <ListItemIcon>
            <EventAvailableIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Check Availability</ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/room-details/family-room" onClick={handleClose}>
          <ListItemText>Family Room</ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/room-details/standard-room" onClick={handleClose}>
          <ListItemText>Standard Room</ListItemText>
        </MenuItem>
        <MenuItem component={Link} href="/room-details/budget-room" onClick={handleClose}>
          <ListItemText>Budget Room</ListItemText>
        </MenuItem>
      </Menu>

      <NavButton component={Link} href="/check-availability" variant="contained" color="secondary">
        Book Now
      </NavButton>
    </NavContainer>
  );
};

export default NavLinks;
