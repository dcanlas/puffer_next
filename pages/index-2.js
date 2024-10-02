import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import CallToAction from "@/components/sections/CallToAction"
import Clients from "@/components/sections/Clients"
import FoodSection from "@/components/sections/FoodSection"
import Form2 from "@/components/sections/Form2"
import News2 from "@/components/sections/News2"
import Pricing2 from "@/components/sections/Pricing2"
import Services2 from "@/components/sections/Services2"
import Slider2 from "@/components/sections/Slider2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {
  return (
    <>
    <Layout headerStyle={2} footerStyle={2}>
    <Slider2 />
    <About2 />
    <Services2 />
    <Pricing2 />
    <FoodSection />
    <Form2 />
    <Testimonial2 />
    <CallToAction />
    <News2 />
    <Clients />
    </Layout>
    </>
  )
}