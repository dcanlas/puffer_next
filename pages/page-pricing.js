import Layout from "@/components/layout/Layout"
import Pricing3 from "@/components/sections/Pricing3"
import PageTitle from "@/components/sections/PageTitle"

export default function PagePricing() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Pricing Table" />
      <Pricing3 />
      </Layout>
    </>
  )
}