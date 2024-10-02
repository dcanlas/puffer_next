import Layout from "@/components/layout/Layout"
import Team2 from "@/components/sections/Team2"
import PageTitle from "@/components/sections/PageTitle"

export default function PageTeam() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Team Grid" />
      <Team2 />
      </Layout>
    </>
  )
}