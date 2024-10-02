import Layout from "@/components/layout/Layout"
import Rooms3 from "@/components/sections/Rooms3"
import PageTitle from "@/components/sections/PageTitle"

export default function RoomsInner() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Rooms" />
      <Rooms3 />
      </Layout>
    </>
  )
}