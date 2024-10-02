import Layout from "@/components/layout/Layout"
import Rooms2 from "@/components/sections/Rooms2"
import PageTitle from "@/components/sections/PageTitle"

export default function RoomsInner() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Rooms" />
      <Rooms2 />
      </Layout>
    </>
  )
}