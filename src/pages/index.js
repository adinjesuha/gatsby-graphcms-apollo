import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Monitorings from "../components/monitorings"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Monitoreos</h2>
    <Monitorings />
  </Layout>
)

export default IndexPage
