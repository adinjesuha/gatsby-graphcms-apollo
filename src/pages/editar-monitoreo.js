import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Monitorings from "../components/monitorings"

const Edit = ({ location }) => (
  <Layout>
    <SEO title="Editar" />
    <p>Editar monitoreo No. {location.state.monitoring.correlative}</p>
    {/* {console.log(location.state)} */}
  </Layout>
)

export default Edit
