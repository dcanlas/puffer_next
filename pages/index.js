import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Features from "@/components/sections/Features"
import Form from "@/components/sections/Form"
import News1 from "@/components/sections/News1"
import Pricing from "@/components/sections/Pricing"
import Rooms from "@/components/sections/Rooms"
import Services from "@/components/sections/Services"
import Slider1 from "@/components/sections/Slider1"
import Team from "@/components/sections/Team"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video from "@/components/sections/Video"
export default function Home() {
  return (
    <>
    <Layout>
    <Slider1 />
    <About1 addClass={"pt-0"} />
    <Rooms />
    <Services />
    <Video />
    <Features />
    <Testimonial1 />
    <Pricing />
    <Team />
    <Form />
    <News1 />
    </Layout>
    </>
  )
}