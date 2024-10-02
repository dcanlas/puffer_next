import Layout from "@/components/layout/Layout"
import Contact from "@/components/sections/Contact"
import FoodSection from "@/components/sections/FoodSection"
import Form2 from "@/components/sections/Form2"
import Testimonial3 from "@/components/sections/Testimonial3"
import PageTitle from "@/components/sections/PageTitle"

export default function PageAbout() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Contact Us" />
      <Contact />
      </Layout>
    </>
  )
}