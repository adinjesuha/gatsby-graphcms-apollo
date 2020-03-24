import React, { useState } from "react"
import MonitoringFilters from "../filter-monitorings"
import styled from "styled-components"

import MonitoringItem from "./monitoring-item"
import { Tag } from "./tag"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`

const StadisticMonitor = styled.article`
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 520px;
  height: 100%;
  header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    padding: 27px 20px;
    h4 {
      margin: 0;
    }
  }
  .body {
    padding: 30px 25px;
    .stadistic-item {
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      p {
        font-size: 14px;
        margin: 0;
      }
      span {
        font-size: 14px;
        font-weight: bold;
        &.inProgress,
        &.completed,
        &.all {
          position: relative;
          font-size: 12px;
          &:before {
            content: "";
            border-radius: 50%;
            width: 4px;
            height: 4px;
            position: absolute;
            left: -10px;
            bottom: calc(50% + -2px);
          }
        }
        &.inProgress {
          color: var(--purple);
          &:before {
            background-color: var(--purple);
          }
        }
        &.completed {
          color: var(--green);
          &:before {
            background-color: var(--green);
          }
        }
        &.all {
          color: var(--yellow);
          &:before {
            background-color: var(--yellow);
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

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

  const sumArray = arr => {
    return arr.reduce((acc, elem) => acc + elem.length, 0)
  }

  const filteredSamples = []
  filteredMonitorings.forEach(monitoring => {
    filteredSamples.push(monitoring.samples)
  })

  const totalSamples = sumArray(filteredSamples)

  const filteredParam = []
  filteredSamples.forEach(samples => {
    samples.map(sample =>
      sample.parameters.map(param => filteredParam.push(param))
    )
  })

  let rapidTest = filteredParam.filter(param => param.testType === "Rapida")
  let traditionalTest = filteredParam.filter(
    param => param.testType !== "Rapida"
  )

  return (
    <Wrapper>
      <MonitoringFilters
        monitorings={filteredMonitorings}
        currentFilter={state.filter}
        filterResultsFn={filterResults}
      />
      <div>
        <ul>{monitoringList}</ul>
        <StadisticMonitor>
          <header>
            <h4>Estadisticas de Monitoreos</h4>
          </header>
          <div className="body">
            <div className="stadistic-item">
              <p>Estatus </p>
              {state.filter === "active" ? (
                <span className="inProgress">En progreso</span>
              ) : state.filter === "completed" ? (
                <span className="completed">Completado</span>
              ) : (
                <span className="all">Todos</span>
              )}
            </div>
            <div className="stadistic-item">
              <p>Total de monitoreos</p>
              <span>{filteredMonitorings.length}</span>
            </div>
            <div className="stadistic-item">
              <p>Total de muestras</p>
              <span>{totalSamples}</span>
            </div>
            <div className="stadistic-item">
              <p>Total de parametros</p>
              <span>{filteredParam.length}</span>
            </div>
            <div className="stadistic-item">
              <p>Pruebas rápidas</p>
              <span>{rapidTest.length}</span>
            </div>
            <div className="stadistic-item">
              <p>Pruebas tradicionales</p>
              <span>{traditionalTest.length}</span>
            </div>
          </div>
        </StadisticMonitor>
      </div>
    </Wrapper>
  )
}

export default MonitoringList
