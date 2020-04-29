import React from "react"
import { Row, Col, Card, CardBody } from 'reactstrap';
import Loadable from 'react-loadable';

import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const LoadableCallendar = Loadable({
  loader: () => import('../../components/CalendarComponent'),
  loading() {
    return <div>Loading...</div>
  },
})

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Calendario" />
      <Row className="page-title align-items-center">
        <Col sm={4} xl={6}>
          <h4 className="mb-1 mt-0">Calendario</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              {/* fullcalendar control */}
              <LoadableCallendar />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage