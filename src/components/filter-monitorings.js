import React from "react"
import styled from "styled-components"

const TabFilters = styled.div`
  font-size: 14px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    margin: 0;
    display: flex;
    li {
      color: #3e3f42;
      margin: 0 15px;
      cursor: pointer;
      a {
        border-bottom: 3px solid transparent;
        &.selected {
          font-weight: 500;
          border-bottom-color: var(--purple);
        }
      }
    }
  }
  p {
    margin: 0;
    span {
      font-weight: 700;
      background-color: var(--yellow);
      color: white;
      font-size: 1rem;
      border-radius: 4px;
      margin-right: 5px;
      height: 34px;
      width: 34px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
  a {
    height: 56px;
    display: flex;
    align-items: center;
  }
`

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
    <TabFilters>
      <p>
        <span>{itemCount}</span> Monitoreo
        {itemCount !== 1 ? "s" : ""}
      </p>

      <ul>
        <li onClick={filterResultsHandler("active")}>
          <a className={currentFilter === "active" ? "selected" : ""}>
            En progreso
          </a>
        </li>

        <li onClick={filterResultsHandler("completed")}>
          <a className={currentFilter === "completed" ? "selected" : ""}>
            Completados
          </a>
        </li>

        <li onClick={filterResultsHandler("all")}>
          <a className={currentFilter === "all" ? "selected" : ""}>Todos</a>
        </li>
      </ul>
      
    </TabFilters>
  )
}

export default MonitoringFilters
