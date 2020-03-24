import React, { useState, Fragment } from "react"
import MonitoringFilters from "../filter-monitorings"

import MonitoringItem from "./monitoring-item"

const MonitoringList = ({ monitorings }) => {
  const [state, setState] = useState({
    filter: "active",
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
  filteredMonitorings.forEach((monitoring, index) => {
    monitoringList.push(<MonitoringItem key={index} monitoring={monitoring} />)
  })
  return (
    <Fragment>
      <MonitoringFilters
        monitorings={filteredMonitorings}
        currentFilter={state.filter}
        filterResultsFn={filterResults}
      />
      <div>
        <ul>{monitoringList}</ul>
      </div>
    </Fragment>
  )
}

export default MonitoringList
