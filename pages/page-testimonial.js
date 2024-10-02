import Layout from "@/components/layout/Layout"
import Testimonial4 from "@/components/sections/Testimonial4"
import PageTitle from "@/components/sections/PageTitle"

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Testimonials" />
      <Testimonial4 />
      </Layout>
    </>
  )
}