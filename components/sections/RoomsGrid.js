import React from "react";
import Link from "next/link";
import { ROOM_DETAILS } from "@/constants/room-details";
import { Box, Container, Grid, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, #fef9e7 0%, ${theme.palette.background.default} 100%)`,
  padding: theme.spacing(8, 0),
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem",
  color: "#dea04c",
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  boxShadow: `0 4px 20px ${theme.palette.secondary.main}20`,
  border: `2px solid #fef9e7`,
  background: theme.palette.background.default,
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: `0 12px 40px ${theme.palette.secondary.main}30`,
    borderColor: theme.palette.primary.main,
    transform: "translateY(-6px)",
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
  boxShadow: `0 6px 20px #a06b3720`,
  background: "#f5f7f8",
}));

const RoomName = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
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
        <Title variant="h2">Our Signature Stays</Title>
        <Subtitle variant="subtitle1">
          Solea's rooms are more than places to rest — they are where your story unfolds.
        </Subtitle>
        <Grid container spacing={4} justifyContent="center">
          {ROOM_DETAILS.map((room, idx) => (
            <Grid item xs={12} sm={6} md={4} key={room.type}>
              <CardActionArea component={Link} href={`/room-details/${room.type}`} sx={{ height: "100%" }}>
                <StyledCard>
                  <RoomImage src={roomImages[idx % roomImages.length]} alt={room.name} />
                  <CardContent>
                    <RoomName variant="h5">{room.name}</RoomName>
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
