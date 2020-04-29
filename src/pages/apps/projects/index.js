import React from "react"
import { Row, Col, Button } from 'reactstrap';

import Layout from "../../../components/Layout"
import SEO from "../../../components/Seo"

import { 
  FiLoader, 
} from 'react-icons/fi'
import MonitoringListing from "../../../components/MonitoringListing";

const IndexPage = () => (
  <Layout>
    <SEO title="Monitoreos" />
    <MonitoringListing />
  </Layout>
)

export default IndexPage
