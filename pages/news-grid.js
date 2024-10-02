import Layout from "@/components/layout/Layout"
import NewsGrid from "@/components/sections/NewsGrid"
import PageTitle from "@/components/sections/PageTitle"

export default function PageNewsGrid() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="News Grid" />
      <NewsGrid />
      </Layout>
    </>
  )
}