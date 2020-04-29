import React from "react"

import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"

import MonitoringListing from "../../../components/MonitoringListing";

const IndexPage = () => (
  <Layout>
    <SEO title="Monitoreos" />
    <MonitoringListing />
  </Layout>
)

export default IndexPage
