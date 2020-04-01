import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

import { removeDash } from "../../utils/removeDash"
import { FaEllipsisV, FaTimes, FaPen } from 'react-icons/fa'
import ParameterItem from "./parameter-item"

const Wrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  border-radius: 4px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    &__left{
      h5 {
        margin: 0;
      }
      p {
        font-size: 14px;
      }
    }
    &__right{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .control-buttons{
        width: 30px;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 6px;
        background-color: var(--grey);
        color: var(--dark-grey);
        &:last-child{
          margin-right: 0;
        }
        &__edit{
          background-color: var(--grey);
          color: var(--dark-grey);
        }
        &__delete{
          background-color: var(--red-rgba);
          color: var(--red);
        }
      }
    }
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: scroll;
    li {
      flex: 0 0 auto;
      margin: 0;
      margin-right: 10px;
    }
  }
`

const SampleItem = ({ sample, ...otherProps }) => (
  <Wrapper>
    <div className="header">
      <div className="header__left">
        <h5>{sample.name} ({sample.parameters.length} parametros)</h5>
        <p>{removeDash(sample.sampleType)}</p>
      </div>
      <div className="header__right">
      {!otherProps.completed && (
        <React.Fragment>
          <Link
            data-testid="monitoring"
            to={`/modal-test/`}
            state={{
              modal: true,
              loadTransition: true,
              sample,
              otherProps
            }}
            className="control-buttons control-buttons__edit"
          >
            <FaPen />
          </Link>
          <button className="control-buttons">
            <FaEllipsisV />
          </button>
          <button className="control-buttons control-buttons__delete">
            <FaTimes />
          </button>
        </React.Fragment>
      )}
      </div>
    </div>
    <ul>
      {sample.parameters.map(({ id, name, testType }) => (
          <ParameterItem key={id} name={name} testType={testType} />
      ))}
    </ul>
  </Wrapper>
)

export default SampleItem
