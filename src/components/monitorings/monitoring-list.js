import React, { useState } from "react"
import MonitoringFilters from "../filter-monitorings"
import styled from "styled-components"

import MonitoringItem from "./monitoring-item"
import { Tag } from "./tag"
import MonitoringStadistic from "./monitoring-stadistic.component"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
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
        <MonitoringStadistic>
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
        </MonitoringStadistic>
      </div>
    </Wrapper>
  )
}

export default MonitoringList
