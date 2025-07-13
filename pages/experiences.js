import Layout from "@/components/layout/Layout";
import { Container } from "@mui/material";
import { EXPERIENCES_DATA } from "@/constants/experiences-data";
import AlternatingCard from "@/components/custom/AlternatingCard";
import PageHeader from "@/components/custom/PageHeader";

export default function Experiences() {
  return (
    <Layout breadcrumbTitle="Experiences">
      <PageHeader
        title="Resort Experiences"
        subtitle="Discover unforgettable adventures and activities that create lasting memories"
      />

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {EXPERIENCES_DATA.map((experience, index) => (
          <AlternatingCard key={index} item={experience} index={index} />
        ))}
      </Container>
    </Layout>
  );
}
