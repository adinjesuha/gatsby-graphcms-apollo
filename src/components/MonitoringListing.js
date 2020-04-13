import React, { useState } from "react"
import { useQuery } from "@apollo/react-hooks"
import { Col, Row } from "reactstrap"

import Monitoring from './Monitoring'
import MonitoringFilters from './MonitoringFilter'
import { ALL_MONITORINGS } from "./operations/queries"

const Monitorings = ({ monitorings }) => {
  const [state, setState] = useState({
    filter: "all",
  })

  const filterResults = filter => {
    setState({
      ...state,
      filter: filter,
    })
  }

  let filteredMonitorings = monitorings

  if (state.filter === "active") {
    filteredMonitorings = monitorings.filter(
      monitoring => monitoring.completed !== true
    )
  } else if (state.filter === "completed") {
    filteredMonitorings = monitorings.filter(
      monitoring => monitoring.completed === true
    )
  }
  
  const monitoringList = []
  filteredMonitorings.forEach((monitoring, i) => {
    monitoringList.push(
      <Col lg={6} xl={6} key={'monitoring-' + monitoring.id}>
        <Monitoring monitoring={monitoring} />
      </Col>
    )
  })

  return (
    <React.Fragment>
      <MonitoringFilters
        monitorings={filteredMonitorings}
        currentFilter={state.filter}
        filterResultsFn={filterResults}
      />
      <Row>{monitoringList}</Row>
    </React.Fragment>
  )
}


const MonitoringListing = () => {
  const { loading, error, data } = useQuery(ALL_MONITORINGS)

  if (loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  
  return <Monitorings monitorings={data.monitorings} />

}

export default MonitoringListing