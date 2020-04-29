import React from 'react'
import { Row, Col } from 'reactstrap';

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import TargetChart from './TargetChart';
import SalesChart from './SalesChart';
import Orders from './Orders';


const AllCharts = () => (
  <React.Fragment>
    {/* stats */}
    <Statistics />
    {/* charts */}
    <Row>
      <Col xl={6}>
        <RevenueChart />
      </Col>
      <Col xl={6}>
        <TargetChart />
      </Col>
    </Row>
    {/* charts */}
    <Row>
      <Col xl={5}>
        <SalesChart />
      </Col>
      <Col xl={7}>
        <Orders />
      </Col>
    </Row>
  </React.Fragment>
)

export default AllCharts;