import React from 'react';
import { Row, Col } from 'reactstrap';

import StatisticsChartWidget from '../Charts/StatisticsChartWidget';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

const Statistics = () => {
  return (
    <React.Fragment>
      <Row>
        <Col md={6} xl={3}>
          <StatisticsChartWidget
            description="Indicadores"
            title="1130"
            data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
            trend={{
              textClass: 'text-success',
              icon: FiArrowUp,
              value: '10.21%'
            }}
          ></StatisticsChartWidget>
        </Col>

        <Col md={6} xl={3}>
          <StatisticsChartWidget
            description="Patógenos"
            title="1005"
            colors={['#f77e53']}
            data={[25, 66, 56, 85, 53, 35, 44, 12, 36, 9, 54]}
            trend={{
              textClass: 'text-danger',
              icon: FiArrowDown,
              value: '5.05%'
            }}
          ></StatisticsChartWidget>
        </Col>

        <Col md={6} xl={3}>
          <StatisticsChartWidget
            description="Micotoxinas"
            title="390"
            colors={['#43d39e']}
            data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
            trend={{
              textClass: 'text-success',
              icon: FiArrowUp,
              value: '25.16%'
            }}
          ></StatisticsChartWidget>
        </Col>

        <Col md={6} xl={3}>
          <StatisticsChartWidget
            description="Monitoreos"
            title="45"
            colors={['#ffbe0b']}
            data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
            trend={{
              textClass: 'text-danger',
              icon: FiArrowDown,
              value: '5.05%'
            }}
          ></StatisticsChartWidget>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Statistics;