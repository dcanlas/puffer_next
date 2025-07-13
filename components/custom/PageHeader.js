import { Box, Container, Typography, styled } from "@mui/material";

const StyledPageHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(12, 0, 8, 0),
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

export default function PageHeader({ title, subtitle }) {
  return (
    <StyledPageHeader>
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, margin: "0 auto" }}>
          {subtitle}
        </Typography>
      </Container>
    </StyledPageHeader>
  );
}
