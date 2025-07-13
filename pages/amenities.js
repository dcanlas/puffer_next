import Layout from "@/components/layout/Layout";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, styled } from "@mui/material";
import { AMENITIES_DATA } from "@/constants/amenities-data";

const PageHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(12, 0, 8, 0),
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: 0,
  overflow: "hidden",
  marginBottom: theme.spacing(4),
  "&:hover": {
    transform: "translateY(-4px)",
    transition: "all 0.3s ease",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 300,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
  height: 300,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const AmenityTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const AmenityDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
}));

export default function Amenities() {
  return (
    <Layout breadcrumbTitle="Amenities">
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Resort Amenities
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, margin: "0 auto" }}>
            Discover the exceptional facilities and services that make your stay unforgettable
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {AMENITIES_DATA.map((amenity, index) => (
          <StyledCard key={index}>
            <Grid container>
              {/* Alternate image position - left for even indices, right for odd indices */}
              {index % 2 === 0 ? (
                <>
                  <Grid item xs={12} md={6}>
                    <StyledCardMedia image={amenity.image} title={amenity.title} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledCardContent>
                      <AmenityTitle variant="h4" component="h2">
                        {amenity.title}
                      </AmenityTitle>
                      <AmenityDescription variant="body1">{amenity.description}</AmenityDescription>
                    </StyledCardContent>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} md={6}>
                    <StyledCardContent>
                      <AmenityTitle variant="h4" component="h2">
                        {amenity.title}
                      </AmenityTitle>
                      <AmenityDescription variant="body1">{amenity.description}</AmenityDescription>
                    </StyledCardContent>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StyledCardMedia image={amenity.image} title={amenity.title} />
                  </Grid>
                </>
              )}
            </Grid>
          </StyledCard>
        ))}
      </Container>
    </Layout>
  );
}
