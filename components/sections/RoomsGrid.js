import React from "react";
import Link from "next/link";
import { ROOM_DETAILS } from "@/constants/room-details";
import { Box, Container, Grid, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled(Box)(({ theme }) => ({
  background: "#f8f6ed",
  padding: theme.spacing(8, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display, serif",
  fontWeight: 400,
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  color: theme.palette.text.secondary,
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
  border: `2px solid #e3e0d3`,
  background: "#fcfbf7",
  transition: "box-shadow 0.2s",
  "&:hover": {
    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
    borderColor: theme.palette.primary.main,
  },
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const RoomImage = styled("img")(({ theme }) => ({
  width: 180,
  height: 180,
  objectFit: "cover",
  borderRadius: 40,
  margin: "0 auto",
  marginBottom: theme.spacing(2),
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  background: "#e3e0d3",
}));

const RoomName = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display, serif",
  fontWeight: 500,
  fontSize: "1.5rem",
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));

const RoomDesc = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

const roomImages = [
  "/images/resource/room-1.jpg",
  "/images/resource/room-2.jpg",
  "/images/resource/room-3.jpg",
  "/images/resource/room-4.jpg",
  "/images/resource/room-5.jpg",
  "/images/resource/room-6.jpg",
];

export default function RoomsGrid() {
  // const { roomsService, isReady } = useRoomsContext();
  // const [rooms, setRooms] = React.useState({});
  // useEffect(() => { if (isReady) setRooms(roomsService.getRoomsByType()); }, [isReady, roomsService]);

  return (
    <Section>
      <Container>
        <Title>Our Signature Stays</Title>
        <Subtitle>Solea's rooms are more than places to rest — they are where your story unfolds.</Subtitle>
        <Grid container spacing={4} justifyContent="center">
          {ROOM_DETAILS.map((room, idx) => (
            <Grid item xs={12} sm={6} md={4} key={room.type}>
              <CardActionArea component={Link} href={`/room-details/${room.type}`} sx={{ height: "100%" }}>
                <StyledCard>
                  <RoomImage src={roomImages[idx % roomImages.length]} alt={room.name} />
                  <CardContent>
                    <RoomName>{room.name}</RoomName>
                    <RoomDesc>{room.description?.split("\n")[0] || "A beautiful room."}</RoomDesc>
                  </CardContent>
                </StyledCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
