import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleMonitoring } from "../components/single-monitoring"

const Edit = ({ monitoring }) => {
  return (
    <Layout>
      <SEO title="Editar" />
      <div>
        <p>Editar monitoreo No. {monitoring.correlative}</p>
        <SingleMonitoring id={monitoring.id} />
      </div>
    </Layout>
  )
}

export default Edit
