import Layout from "@/components/layout/Layout";
import { Container } from "@mui/material";
import { AMENITIES_DATA } from "@/constants/amenities-data";
import AlternatingCard from "@/components/custom/AlternatingCard";
import PageHeader from "@/components/custom/PageHeader";

export default function Amenities() {
  return (
    <Layout breadcrumbTitle="Amenities">
      <PageHeader
        title="Resort Amenities"
        subtitle="Discover the exceptional facilities and services that make your stay unforgettable"
      />

      <Container maxWidth="lg" sx={{ pb: 8 }}>
        {AMENITIES_DATA.map((amenity, index) => (
          <AlternatingCard key={index} item={amenity} index={index} />
        ))}
      </Container>
    </Layout>
  );
}
