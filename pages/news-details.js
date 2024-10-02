import Layout from "@/components/layout/Layout"
import NewsDetails from "@/components/sections/NewsDetails"
import PageTitle from "@/components/sections/PageTitle"

export default function PageNewsDetails() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="News Details" />
      <NewsDetails />
      </Layout>
    </>
  )
}