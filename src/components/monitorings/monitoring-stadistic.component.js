import React from "react"
import styled from "styled-components"

const StadisticMonitor = styled.article`
  background: white;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  width: 100%;
  max-width: 520px;
  height: 100%;
  &.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 110px;
  }
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
const MonitoringStadistic = ({ children }) => {
  return (
    <StadisticMonitor className="sticky">
      <header>
        <h4>Estadisticas de Monitoreos</h4>
      </header>
      <div className="body">{children}</div>
    </StadisticMonitor>
  )
}

export default MonitoringStadistic
