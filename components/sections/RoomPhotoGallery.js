import React, { useState, useEffect } from "react";
import { Box, Grid, Modal, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Close, ChevronLeft, ChevronRight, GridOn } from "@mui/icons-material";
import { supabase } from "../../lib/supabase";

const RoomPhotoGallery = ({ roomType = "family-room" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [roomPhotos, setRoomPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch room photos from Supabase storage
  const fetchRoomPhotos = async (type) => {
    try {
      const { data, error } = await supabase.storage.from("room-photos").list(`${type}/`, {
        limit: 20,
        offset: 0,
      });

      if (error) {
        console.error("Error fetching photos:", error);
        // In production, quietly fall back to local images
        return getFallbackPhotos();
      }

      if (!data || data.length === 0) {
        // No photos found, use fallback
        return getFallbackPhotos();
      }

      // Convert Supabase file list to photo objects
      const photos = data
        .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp)$/i))
        .map((file, index) => {
          const { data: urlData } = supabase.storage.from("room-photos").getPublicUrl(`${type}/${file.name}`);

          return {
            src: urlData.publicUrl,
            alt: `Room ${getPhotoAltText(file.name, index + 1)}`,
          };
        });

      return photos.length > 0 ? photos : getFallbackPhotos();
    } catch (error) {
      console.error("Error fetching room photos:", error);
      return getFallbackPhotos();
    }
  };

  // Fallback to local images if Supabase fails
  const getFallbackPhotos = () => {
    return [
      { src: "/images/resource/room-1.jpg", alt: "Room main view" },
      { src: "/images/resource/room-2.jpg", alt: "Room interior" },
      { src: "/images/resource/room-3.jpg", alt: "Room bathroom" },
      { src: "/images/resource/room-4.jpg", alt: "Room balcony view" },
      { src: "/images/resource/room-5.jpg", alt: "Room seating area" },
      { src: "/images/resource/room-6.jpg", alt: "Room night view" },
    ];
  };

  // Generate alt text based on filename
  const getPhotoAltText = (filename, index) => {
    const name = filename.replace(/\.[^/.]+$/, "").toLowerCase();
    if (name.includes("main")) return "main view";
    if (name.includes("interior")) return "interior";
    if (name.includes("bathroom")) return "bathroom";
    if (name.includes("balcony")) return "balcony view";
    if (name.includes("seating")) return "seating area";
    if (name.includes("night")) return "night view";
    return `view ${index}`;
  };

  // Load photos when component mounts or roomType changes
  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      try {
        const photos = await fetchRoomPhotos(roomType);
        setRoomPhotos(photos);
      } catch (error) {
        console.error("Failed to load photos:", error);
        // Fallback to local photos on any error
        setRoomPhotos(getFallbackPhotos());
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [roomType]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? roomPhotos.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === roomPhotos.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") handlePrevImage();
    if (event.key === "ArrowRight") handleNextImage();
    if (event.key === "Escape") handleCloseModal();
  };

  // Loading state
  if (loading) {
    return (
      <Box sx={{ mb: 4, textAlign: "center", py: 8, bgcolor: "grey.100" }}>
        <Typography variant="h6" color="text.secondary">
          Loading room photos...
        </Typography>
      </Box>
    );
  }

  // Handle case where no photos are available
  if (!roomPhotos || roomPhotos.length === 0) {
    return (
      <Box sx={{ mb: 4, textAlign: "center", py: 8, bgcolor: "grey.100" }}>
        <Typography variant="h6" color="text.secondary">
          No photos available for this room
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ mb: 4 }}>
        {isMobile ? (
          // Mobile layout - single column
          <Box>
            <Box
              onClick={() => handleImageClick(0)}
              sx={{
                position: "relative",
                cursor: "pointer",
                borderRadius: 2,
                overflow: "hidden",
                mb: 2,
                width: "100%",
                display: "flex",
                "&:hover .show-all-btn": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={roomPhotos[0].src}
                alt={roomPhotos[0].alt}
                style={{
                  width: "100%",
                  height: "40vh",
                  minHeight: "250px",
                  maxHeight: "350px",
                  objectFit: "cover",
                  display: "block",
                  maxWidth: "100%",
                }}
                onError={(e) => {
                  e.target.src = "/images/resource/room-1.jpg"; // Fallback image
                }}
              />
              <Box
                className="show-all-btn"
                sx={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  bgcolor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  px: 2,
                  py: 1,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  opacity: 0.8,
                  transition: "opacity 0.3s",
                }}
              >
                <GridOn fontSize="small" />
                <Typography variant="body2">Show all {roomPhotos.length} photos</Typography>
              </Box>
            </Box>
            <Grid container spacing={1}>
              {roomPhotos.slice(1, 5).map((photo, index) => (
                <Grid item xs={6} key={index + 1}>
                  <Box
                    onClick={() => handleImageClick(index + 1)}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 1,
                      overflow: "hidden",
                      width: "100%",
                      display: "flex",
                      "&:hover": {
                        transform: "scale(1.02)",
                        transition: "transform 0.2s",
                      },
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      style={{
                        width: "100%",
                        height: "15vh",
                        minHeight: "100px",
                        maxHeight: "140px",
                        objectFit: "cover",
                        display: "block",
                        maxWidth: "100%",
                      }}
                      onError={(e) => {
                        e.target.src = "/images/resource/room-1.jpg"; // Fallback image
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          // Desktop layout - Airbnb style
          <Grid container spacing={1} sx={{ height: "60vh", minHeight: "400px", maxHeight: "500px" }}>
            {/* Main featured image */}
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Box
                onClick={() => handleImageClick(0)}
                sx={{
                  cursor: "pointer",
                  borderRadius: "12px 0 0 12px",
                  overflow: "hidden",
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  "&:hover": {
                    transform: "scale(1.01)",
                    transition: "transform 0.2s",
                  },
                }}
              >
                <img
                  src={roomPhotos[0].src}
                  alt={roomPhotos[0].alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  onError={(e) => {
                    e.target.src = "/images/resource/room-1.jpg"; // Fallback image
                  }}
                />
              </Box>
            </Grid>

            {/* Right side grid */}
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Grid container spacing={1} sx={{ height: "100%" }}>
                {roomPhotos.slice(1, 5).map((photo, index) => (
                  <Grid item xs={6} key={index + 1} sx={{ height: "calc(50% + 4px)" }}>
                    <Box
                      onClick={() => handleImageClick(index + 1)}
                      sx={{
                        position: "relative",
                        cursor: "pointer",
                        borderRadius: index === 1 ? "0 12px 0 0" : index === 3 ? "0 0 12px 0" : 0,
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        "&:hover": {
                          transform: "scale(1.01)",
                          transition: "transform 0.2s",
                        },
                        "&:hover .show-all-btn": {
                          opacity: 1,
                        },
                      }}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                        onError={(e) => {
                          e.target.src = "/images/resource/room-1.jpg"; // Fallback image
                        }}
                      />
                      {/* Show all photos button on last image */}
                      {index === 3 && (
                        <Box
                          className="show-all-btn"
                          sx={{
                            position: "absolute",
                            bottom: 16,
                            right: 16,
                            bgcolor: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            px: 2,
                            py: 1,
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            opacity: 0.8,
                            transition: "opacity 0.3s",
                          }}
                        >
                          <GridOn fontSize="small" />
                          <Typography variant="body2">Show all {roomPhotos.length} photos</Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Lightbox Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.9)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            outline: "none",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: -60,
              right: 0,
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <Close />
          </IconButton>

          {/* Previous button */}
          <IconButton
            onClick={handlePrevImage}
            sx={{
              position: "absolute",
              left: -60,
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          {/* Current image */}
          <img
            src={roomPhotos[currentImageIndex].src}
            alt={roomPhotos[currentImageIndex].alt}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
            onError={(e) => {
              e.target.src = "/images/resource/room-1.jpg"; // Fallback image
            }}
          />

          {/* Next button */}
          <IconButton
            onClick={handleNextImage}
            sx={{
              position: "absolute",
              right: -60,
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Image counter */}
          <Box
            sx={{
              position: "absolute",
              bottom: -60,
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="body2">
              {currentImageIndex + 1} / {roomPhotos.length}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default RoomPhotoGallery;
