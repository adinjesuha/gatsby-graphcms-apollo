import React from "react"
import styled from "styled-components"

import MakeDone from "../makeDone"
import SampleItem from "./sample-item"
import { Tag } from "./tag"
import { formattingDate } from "../../utils/formattingDate"

const Wrapper = styled.li`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 40px;
  width: 100%;
  .item__header {
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 10px;
    margin-bottom: 15px;
    &--left {
      display: flex;
      align-items: center;
      .tag:first-child {
        margin-right: 8px;
      }
      .company-info-monitoring {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > * {
          margin: 0;
        }
        p {
          font-size: 14px;
          color: var(--dark-grey);
        }
      }
    }
  }
  .item__body {
    padding: 0 20px 20px;
  }
  .item__controls {
    width: 100%;
    padding: 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & > *:last-child {
      margin-left: 10px;
    }
  }
`

const MonitoringItem = ({ monitoring }) => (
  <Wrapper>
    <div className="item__header">
      <div className="item__header--left">
        <Tag className="correlative">{monitoring.correlative}</Tag>
        <div className="company-info-monitoring">
          <h4>{monitoring.company.name}</h4>
          <p>
            Fecha de monitoreo:{" "}
            <strong>{formattingDate(monitoring.samplingDate)}</strong>
          </p>
        </div>
      </div>
      <div className="item__header--right">
        <Tag className={`${monitoring.completed ? "completed" : "pending"}`}>
          {monitoring.completed ? "Completado" : "En progreso"}
        </Tag>
      </div>
    </div>
    <div className="item__body">
      {monitoring.samples.map(sample => (
        <>
          <SampleItem key={sample.id} sample={sample} correlative={monitoring.correlative} company={monitoring.company.name} monitoringID={monitoring.id} completed={monitoring.completed}/>
        </>
      ))}
    </div>
    {!monitoring.completed && (
      <div className="item__controls">
        <MakeDone
          classNames="button primary"
          id={monitoring.id}
          completed={monitoring.completed}
        />
      </div>
    )}
  </Wrapper>
)

export default MonitoringItem
