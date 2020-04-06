import React from "react"
import styled from "styled-components"

import { FiPlus } from 'react-icons/fi'

const TabFilters = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-side{
    .tab-title{
      margin: 0;
      font-size: 19px;
    }
  }
  .right-side{
    display: flex;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: 1px solid transparent;
      border-color: #e2e7f1;
      border-radius: .3rem;
      color: #212529;
      font-size: .775rem;
      font-weight: 500;
      text-align: center;
      vertical-align: middle;
      line-height: 1;
      cursor: pointer;
      display: inline-block;
      padding: .8rem .7rem;
      &.create{
        background-color: var(--green);
        border-color: var(--green);
        margin-right: 25px;
        color: white;
        padding: .7rem .7rem;
        i{
          margin-right: .25rem !important;
          &:before{
            content: "+";
            font-style: normal;
            font-weight: 400;
            display: inline-block;
            text-decoration: inherit;
            width: 1em;
            text-align: center;
            font-variant: normal;
            text-transform: none;
            line-height: 1em;
            font-size: 120%;
          }
        }
      }
      &.selected {
        color: white;
        background-color: var(--purple);
        border-color: var(--purple);
      }
    }
    .tab-options {
      margin: 0;
      display: flex;
      li {
        margin: 0;
        button{
          border-radius: 0;
        }
        &:first-child button{ 
          border-top-left-radius: .3rem;
          border-bottom-left-radius: .3rem;
        }
        &:last-child button{ 
          border-top-right-radius: .3rem;
          border-bottom-right-radius: .3rem;
        }
        &:not(:first-child) button {
          margin-left: -1px;
        }
      }
    }
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
      {/*<p>
        <span>{itemCount}</span> Monitoreo
        {itemCount !== 1 ? "s" : ""}
      </p>*/}
      <div className="left-side">
        <h4 className="tab-title">Lista de monitoreos</h4>
      </div>
      <div className="right-side">
        <button className="create">
          <i />
          Crear Monitoreo
        </button>
        <ul className="tab-options">
          <li>
            <button 
              onClick={filterResultsHandler("active")} 
              className={currentFilter === "active" ? "selected" : ""}
            >
              En progreso
            </button>
          </li>

          <li>
            <button
              onClick={filterResultsHandler("completed")}
              className={currentFilter === "completed" ? "selected" : ""}
            >
              Completados
            </button>
          </li>

          <li>
            <button
              onClick={filterResultsHandler("all")}
              className={currentFilter === "all" ? "selected" : ""}
            >
              Todos
            </button>
          </li>

        </ul>
      </div>

      
    </TabFilters>
  )
}

export default MonitoringFilters
