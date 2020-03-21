import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"

import { ALL_MONITORING } from "./operations/queries"
import MakeDone from "./makeDone"
import MonitoringFilters from "./filter-monitorings"

const SampleCardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  p {
    margin-bottom: 6px;
    font-size: 16px;
  }
  ul {
    display: flex;
    li {
      background-color: rgba(0, 0, 0, 0.14);
      font-size: 14px;
      border-radius: 4px;
      margin: 0;
      margin-right: 10px;
      padding: 4px 10px;
    }
  }
`

const MonitoringItemWrapper = styled.li`
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 40px;
  .monitoring-item--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .tag {
      background-color: rgba(0, 0, 0, 0.06);
      display: inline-block;
      border-radius: 2px;
      padding: 6px 8px;
      font-size: 14px;
      &.completed {
        background-color: rgba(56, 178, 73, 0.1);
        color: rgba(56, 178, 73, 1);
      }
      &.pending {
        background-color: rgba(230, 73, 45, 0.1);
        color: rgba(230, 73, 45);
      }
    }
    &__left {
      display: flex;
      align-items: center;
      .tag:first-child {
        margin-right: 8px;
      }
    }
  }
  .controls {
    width: 100%;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & > * {
      &:nth-child(2) {
        margin: 0 10px;
      }
      flex: 0 0 auto;
    }
    a.buttton {
      display: inline-flex;
      align-items: center;
      text-align: center;
      text-decoration: none;
      white-space: nowrap;
      vertical-align: middle;
      transition: all 0.2s;
      font-weight: 400;
      position: relative;
      justify-content: center;
      height: 2.375rem;
      padding: 0 1.125rem;
      font-size: 0.875rem;
      border: 1px solid var(--border-color-main);
      border-radius: 4px;
      color: white;
      &.edit {
        background: #38b249 !important;
      }
    }
  }
`

const SampleCard = ({ sample }) => (
  <SampleCardWrapper>
    <p>
      {sample.name} | {sample.sampleType}
    </p>
    <ul>
      {sample.parameters.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  </SampleCardWrapper>
)

export const MonitoringItem = ({ monitoring }) => (
  <MonitoringItemWrapper>
    <div className="monitoring-item--header">
      <div className="monitoring-item--header__left">
        <span className="tag">{monitoring.correlative}</span>
        <h4>{monitoring.company.name}</h4>
      </div>
      <div className="monitoring-item--header__right">
        <span
          className={`tag ${monitoring.completed ? "completed" : "pending"}`}
        >
          {monitoring.completed ? "Completado" : "Pendiente"}
        </span>
      </div>
    </div>
    <div>
      {monitoring.samples.map(sample => (
        <SampleCard key={sample.id} sample={sample} />
      ))}
    </div>
    <div className="controls">
      <Link
        to={`/editar-monitoreo`}
        state={{ monitoring }}
        className="buttton edit"
      >
        Editar
      </Link>
      <MakeDone
        classNames="primary"
        id={monitoring.id}
        completed={monitoring.completed}
      />
      <button className="danger">Eliminar</button>
    </div>
  </MonitoringItemWrapper>
)

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
