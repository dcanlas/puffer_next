import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import FoodSection from "@/components/sections/FoodSection"
import Form2 from "@/components/sections/Form2"
import Testimonial3 from "@/components/sections/Testimonial3"
import PageTitle from "@/components/sections/PageTitle"

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="About Us" />
      <About1 />
      <FoodSection />
      <Form2 />
      <Testimonial3 />
      </Layout>
    </>
  )
}