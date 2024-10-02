import Layout from "@/components/layout/Layout"
import RoomsDetails from "@/components/sections/RoomsDetails"
import PageTitle from "@/components/sections/PageTitle"

export default function RoomDetails() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Rooms Details" />
      <RoomsDetails />
      </Layout>
    </>
  )
}