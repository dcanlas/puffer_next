import React from "react";
import Link from "next/link";
import { ROOM_DETAILS } from "@/constants/room-details";
import { Box, Container, Grid, Typography, Card, CardActionArea } from "@mui/material";
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
  borderRadius: 0,
  boxShadow: `0 4px 20px ${theme.palette.secondary.main}20`,
  border: `2px solid #fef9e7`,
  background: theme.palette.background.default,
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: `0 12px 40px ${theme.palette.secondary.main}30`,
    borderColor: theme.palette.primary.main,
    transform: "translateY(-6px)",
  },
  height: 320,
  position: "relative",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const CardOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.7)",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const RoomName = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: 600,
  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  flex: 1,
}));

const AmenitiesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

const AmenityIcon = styled("i")(({ theme }) => ({
  color: "white",
  fontSize: "1.2rem",
  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
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
        <Grid container spacing={2} justifyContent="center">
          {ROOM_DETAILS.map((room, idx) => (
            <Grid item xs={12} md={6} key={room.type}>
              <CardActionArea component={Link} href={`/room-details/${room.type}`} sx={{ height: "100%" }}>
                <StyledCard
                  sx={{
                    backgroundImage: `url(${roomImages[idx % roomImages.length]})`,
                  }}
                >
                  <CardOverlay>
                    <RoomName variant="h6">{room.name}</RoomName>
                    <AmenitiesContainer>
                      {room.amenities.slice(0, 4).map((amenity, amenityIdx) => (
                        <AmenityIcon key={amenityIdx} className={amenity.icon} title={amenity.label} />
                      ))}
                    </AmenitiesContainer>
                  </CardOverlay>
                </StyledCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
