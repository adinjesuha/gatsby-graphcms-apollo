import React from "react"
import { Row, Col, Button } from 'reactstrap';

import Layout from "../../../components/Layout"
import SEO from "../../../components/seo"

import { 
  FiLoader, 
} from 'react-icons/fi'
import MonitoringListing from "../../../components/MonitoringListing";

const IndexPage = () => (
  <Layout>
    <SEO title="Apps/Monitoreos" />
    <React.Fragment>

      <MonitoringListing />

      <Row className="mb-3 mt-2">
        <Col>
          <div className="text-center">
            <Button color="white">
              <FiLoader className="icon-dual icon-xs mr-2"/>Load more
            </Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  </Layout>
)

export default IndexPage
