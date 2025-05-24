"use client";
import Link from "next/link";
import { useState } from "react";
import { List, ListItem, ListItemButton, ListItemText, Collapse, IconButton, styled } from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Home as HomeIcon,
  Hotel as HotelIcon,
  EventAvailable as EventAvailableIcon,
} from "@mui/icons-material";

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NestedList = styled(List)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
}));

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledList>
      <ListItem disablePadding>
        <StyledListItemButton component={Link} href="/">
          <HomeIcon sx={{ mr: 2 }} />
          <ListItemText primary="Home" />
        </StyledListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <StyledListItemButton onClick={handleClick}>
          <HotelIcon sx={{ mr: 2 }} />
          <ListItemText primary="Rooms" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </StyledListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <NestedList>
          <ListItem disablePadding>
            <StyledListItemButton component={Link} href="/check-availability">
              <EventAvailableIcon sx={{ mr: 2 }} />
              <ListItemText primary="Check Availability" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton component={Link} href="/room-details/family-room">
              <ListItemText primary="Family Room" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton component={Link} href="/room-details/standard-room">
              <ListItemText primary="Standard Room" />
            </StyledListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <StyledListItemButton component={Link} href="/room-details/budget-room">
              <ListItemText primary="Budget Room" />
            </StyledListItemButton>
          </ListItem>
        </NestedList>
      </Collapse>

      <ListItem disablePadding>
        <StyledListItemButton
          component={Link}
          href="/check-availability"
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.secondary.contrastText,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.secondary.dark,
            },
          }}
        >
          <ListItemText primary="Book Now" />
        </StyledListItemButton>
      </ListItem>
    </StyledList>
  );
}
