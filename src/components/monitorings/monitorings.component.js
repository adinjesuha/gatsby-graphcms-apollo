import React from "react"
import { useQuery } from "@apollo/react-hooks"

import { ALL_MONITORINGS } from "../operations/queries"
import MonitoringList from "./monitoring-list"

const Monitorings = () => {
  const { loading, error, data } = useQuery(ALL_MONITORINGS)
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
