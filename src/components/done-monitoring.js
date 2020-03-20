import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { MONITORING_DONE } from "./operations/queries"
import { MonitoringItem } from "./draft-monitoring"

const DoneMonitorings = () => {
  const { loading, error, data } = useQuery(MONITORING_DONE)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  return data.monitorings.length ? (
    <MonitoringItem monitorings={data.monitorings} />
  ) : (
    <p>No tiene monitoreos hechos</p>
  )
}
export default DoneMonitorings
