import React from "react";
import { Box, Typography } from "@mui/material";

export default function FontTest() {
  return (
    <Box sx={{ p: 4, bgcolor: "#f0f0f0" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "FinkHeavy-Medium, Arial, sans-serif",
          marginBottom: 2,
          color: "#fecf4f",
        }}
      >
        Testing FinkHeavy-Medium Font
      </Typography>

      <Typography
        sx={{
          fontFamily: "FinkHeavy-Medium, Arial, sans-serif",
          fontSize: "1.5rem",
          marginBottom: 2,
          color: "#333",
        }}
      >
        This should display in FinkHeavy-Medium font
      </Typography>

      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontSize: "1.5rem",
          marginBottom: 2,
          color: "#666",
        }}
      >
        This should display in Arial font (for comparison)
      </Typography>

      <Typography
        sx={{
          fontFamily: "Times, serif",
          fontSize: "1.5rem",
          color: "#999",
        }}
      >
        This should display in Times font (for comparison)
      </Typography>
    </Box>
  );
}
