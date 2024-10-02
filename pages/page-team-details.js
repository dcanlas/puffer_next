import React from 'react';

import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/TeamDetailsInner"
import PageTitle from "@/components/sections/PageTitle"

export default function PageTeamDetailsInner() {
  return (
    <>
      <Layout headerStyle={2}>
      <PageTitle pageName="Team Details" />
      <TeamDetails />
      </Layout>
    </>
  )
}