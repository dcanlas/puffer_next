import Layout from "@/components/layout/Layout";
import Form from "@/components/sections/Form";
import RoomsGrid from "@/components/sections/RoomsGrid";
import Slider1 from "@/components/sections/Slider1";
import Video from "@/components/sections/Video";

export default function Home() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Slider1 />
      <RoomsGrid />
      <Video />
      <Form />
    </Layout>
  );
}
