import React, { useState, Fragment } from "react"
import { useQuery } from "@apollo/react-hooks"

import { ALL_MONITORING } from "./operations/queries"
import UpdateState from "./updateState"
import MonitoringFilters from "./filter-monitorings"

export const MonitoringItem = ({ monitoring }) => (
  <li>
    <UpdateState id={monitoring.id} completed={monitoring.completed} />
    <span>{monitoring.correlative}</span>
    <h3>{monitoring.company.name}</h3>
    <h4>Estado: {monitoring.completed ? "Cempletado" : "Pendiente"}</h4>
  </li>
)

const MonitoringList = ({ monitorings }) => {
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

const Monitorings = () => {
  const { loading, error, data } = useQuery(ALL_MONITORING)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return <MonitoringList monitorings={data.monitorings} />
}

export default Monitorings
