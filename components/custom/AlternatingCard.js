import { Grid, Card, CardContent, CardMedia, Typography, styled } from "@mui/material";

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

const CardTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
}));

const CardDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
}));

export default function AlternatingCard({ item, index }) {
  return (
    <StyledCard>
      <Grid container>
        {/* Alternate image position - left for even indices, right for odd indices */}
        {index % 2 === 0 ? (
          <>
            <Grid item xs={12} md={6}>
              <StyledCardMedia image={item.image} title={item.title} />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledCardContent>
                <CardTitle variant="h4" component="h2">
                  {item.title}
                </CardTitle>
                <CardDescription variant="body1">{item.description}</CardDescription>
              </StyledCardContent>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <StyledCardContent>
                <CardTitle variant="h4" component="h2">
                  {item.title}
                </CardTitle>
                <CardDescription variant="body1">{item.description}</CardDescription>
              </StyledCardContent>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledCardMedia image={item.image} title={item.title} />
            </Grid>
          </>
        )}
      </Grid>
    </StyledCard>
  );
}
