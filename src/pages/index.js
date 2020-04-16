import React  from "react"
import { 
  Row, 
  Col, 
  UncontrolledButtonDropdown, 
  DropdownMenu, 
  DropdownItem, 
  DropdownToggle 
} from 'reactstrap';
import { 
  FiChevronDown, 
  FiMail, 
  FiPrinter, 
  FiFile,
  FiFileText
} from 'react-icons/fi';

import Statistics from '../components/Dashboard/Statistics';
import RevenueChart from '../components/Dashboard/RevenueChart';
import TargetChart from '../components/Dashboard/TargetChart';
import SalesChart from '../components/Dashboard/SalesChart';
import Orders from '../components/Dashboard/Orders';

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <div className="">
        <Row className="page-title align-items-center">
          <Col sm={4} xl={6}>
            <h4 className="mb-1 mt-0">Dashboard</h4>
          </Col>
          <Col sm={8} xl={6}>
            <form className="form-inline float-sm-right mt-3 mt-sm-0">
              <UncontrolledButtonDropdown>
                <DropdownToggle color="primary" className="dropdown-toggle">
                  <FiFileText className='mb-1 mr-1' />
                  Download 
                  <i className="icon ml-1"><FiChevronDown /></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FiMail className="icon-dual icon-xs mr-2" />
                    <span>Email</span>
                  </DropdownItem>
                  <DropdownItem>
                    <FiPrinter className="icon-dual icon-xs mr-2" />
                    <span>Print</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FiFile className="icon-dual icon-xs mr-2" />
                    <span>Re-Generate</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </form>
          </Col>
        </Row>
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
      </div>
    </Layout>
  )
}

export default IndexPage
