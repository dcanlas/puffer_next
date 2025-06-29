import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

const AboutTheResort = ({ showContainer = true, variant = "detailed" }) => {
  const content = (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h3" sx={{ mb: 3 }}>
        About the Resort
      </Typography>

      <Typography className="text" sx={{ mb: 3 }}>
        Welcome to Puffer Isle Resort, your ultimate destination for a beachfront getaway!
      </Typography>

      <Typography className="text" sx={{ mb: 3 }}>
        Our resort boasts a stunning location right on the beach, where you can wake up every morning to the sound of
        the waves and the fresh ocean breeze.
      </Typography>

      <Typography className="text" sx={{ mb: 3 }}>
        Relax and unwind by our sparkling swimming pool. Or indulge in some delicious food and drinks at our on-site
        restaurant and bar, where we serve local cuisine using fresh ingredients. You can also ask us to prepare or cook
        a dish that you like, for a fee, and provide the ingredients.
      </Typography>

      <Typography className="text" sx={{ mb: 3 }}>
        With ample parking available on site, you can explore the local area at your leisure. Take a stroll along the
        pristine beach, try your hand at some water sports, or simply soak up the sun on the sand.
      </Typography>

      <Typography className="text" sx={{ mb: 0 }}>
        At Puffer Isle Resort, we pride ourselves on providing our guests with the ultimate beachfront experience. Book
        your stay with us today and start creating unforgettable memories!
      </Typography>
    </Box>
  );

  if (!showContainer) {
    return content;
  }

  return <Container maxWidth="lg">{content}</Container>;
};

export default AboutTheResort;
