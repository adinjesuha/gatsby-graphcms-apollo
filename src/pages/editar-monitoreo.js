import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleMonitoring } from "../components/single-monitoring"

const Edit = ({ location }) => {
  return (
    <Layout>
      <SEO title="Editar" />
      <p>Editar monitoreo No. {location.state.monitoring.correlative}</p>
      <SingleMonitoring id={location.state.monitoring.id} />
    </Layout>
  )
}

export default Edit
