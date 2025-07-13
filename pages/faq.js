import Layout from "@/components/layout/Layout";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FAQ_SECTIONS } from "@/constants/faq-data";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: `${theme.spacing(1)} 0`,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 0,
  border: "none",
  "&.Mui-expanded": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: 0,
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: theme.palette.primary.contrastText,
    },
  },
  "& .MuiAccordionSummary-content": {
    margin: `${theme.spacing(2)} 0`,
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderTop: "none",
  borderRadius: 0,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  textAlign: "center",
}));

const PageHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(12, 0, 8, 0),
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

export default function FAQ() {
  return (
    <Layout breadcrumbTitle="Frequently Asked Questions">
      <PageHeader>
        <Container maxWidth="lg">
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, margin: "0 auto" }}>
            Find answers to common questions about Puffer Isle Resort
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {FAQ_SECTIONS.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: 6 }}>
            <SectionTitle variant="h3" component="h2">
              {section.title}
            </SectionTitle>

            <Grid container spacing={3}>
              <Grid item xs={12} lg={10} mx="auto">
                {section.questions.map((faq, index) => (
                  <StyledAccordion key={index}>
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${sectionIndex}-${index}-content`}
                      id={`panel${sectionIndex}-${index}-header`}
                    >
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        {faq.question}
                      </Typography>
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        {faq.answer}
                      </Typography>
                    </StyledAccordionDetails>
                  </StyledAccordion>
                ))}
              </Grid>
            </Grid>
          </Box>
        ))}

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Paper elevation={2} sx={{ p: 4, backgroundColor: "grey.50" }}>
            <Typography variant="h5" gutterBottom color="primary">
              Still Have Questions?
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Our friendly team is here to help! Contact us directly for personalized assistance.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                📧 info@pufferresort.com
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
                📞 +1 (555) 123-4567
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
}
