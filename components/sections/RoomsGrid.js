import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRoomsService } from "@/hooks/useRoomsService";
import { ROOM_DETAILS } from "@/constants/room-details";
import { Box, Container, Grid, Typography, Button } from "@mui/material";

// the A/C rooms
const upperGrid = ROOM_DETAILS.slice(0, 2);

// the fan rooms
const lowerGrid = ROOM_DETAILS.slice(2);

export default function RoomsGrid() {
  const { roomsService, isReady } = useRoomsService();
  const [rooms, setRooms] = useState({});

  useEffect(() => {
    if (isReady) {
      const theRooms = roomsService.getRoomsByType();
      setRooms(theRooms);
    }
  }, [isReady, roomsService]);

  const renderRoomBlock = (room, index) => {
    if (!room) return null;

    return (
      <Grid item key={room.id} lg={6} md={6} sm={12}>
        <Box className="inner-box wow fadeIn" data-wow-delay={`${index * 100}ms`}>
          <Box className="image-box">
            <figure className="image-2 overlay-anim">
              <img src={room.image || "images/resource/room-1.jpg"} alt={room.name} />
            </figure>
          </Box>
          <Box className="content-box">
            <Typography variant="h6" className="title">
              <Link href={`/room-details/${room.id}`}>{room.name}</Link>
            </Typography>
            <span className="price">{room.maxOccupancy} guests</span>
          </Box>
          <Box className="box-caption">
            <Link href={`/room-details/${room.id}`} className="book-btn">
              view details
            </Link>
            <Box component="ul" className="bx-links">
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-wifi"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-bed"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-bath"></i>
                </Link>
              </li>
              <li>
                <Link href={`/room-details/${room.id}`}>
                  <i className="fa fa-shower"></i>
                </Link>
              </li>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  };

  return (
    <Box component="section" className="rooms-section pb-100">
      <Container>
        <Box className="sec-title text-center wow fadeInUp">
          <Typography variant="h2">Our Rooms</Typography>
        </Box>
        <Grid container spacing={4}>
          {isReady && rooms.ac && rooms.ac.map((room, index) => renderRoomBlock(room, index))}
          {isReady && rooms.fan && rooms.fan.map((room, index) => renderRoomBlock(room, index))}
        </Grid>
      </Container>
    </Box>
  );
}
