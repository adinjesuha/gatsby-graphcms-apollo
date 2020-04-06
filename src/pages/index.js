import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Monitorings from "../components/monitorings/monitorings.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Monitorings />
  </Layout>
)

export default IndexPage
