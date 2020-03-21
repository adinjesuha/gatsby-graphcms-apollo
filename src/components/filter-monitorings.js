import React from "react"

const MonitoringFilters = ({ monitorings, currentFilter, filterResultsFn }) => {
  const filterResultsHandler = filter => {
    return () => {
      filterResultsFn(filter)
    }
  }

  const activeMonitorings = monitorings.filter(
    monitoring => monitoring.completed !== true
  )

  let itemCount = monitorings.length

  if (currentFilter === "active") {
    itemCount = activeMonitorings.length
  } else if (currentFilter === "completed") {
    itemCount = monitorings.length - activeMonitorings.length
  }

  return (
    <div>
      <span>
        {" "}
        {itemCount} item
        {itemCount !== 1 ? "s" : ""}
      </span>

      <ul>
        <li onClick={filterResultsHandler("all")}>
          <a className={currentFilter === "all" ? "selected" : ""}>Todos</a>
        </li>

        <li onClick={filterResultsHandler("active")}>
          <a className={currentFilter === "active" ? "selected" : ""}>
            Pendientes
          </a>
        </li>

        <li onClick={filterResultsHandler("completed")}>
          <a className={currentFilter === "completed" ? "selected" : ""}>
            Completados
          </a>
        </li>
      </ul>
    </div>
  )
}

export default MonitoringFilters
