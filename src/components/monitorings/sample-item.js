import React from "react"
import styled from "styled-components"

import { Tag } from "./tag"
import { removeDash } from "../../utils/removeDash"
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
  h5 {
    margin: 0;
  }
  p {
    font-size: 14px;
    margin-bottom: 20px;
    span {
      display: block;
      font-weight: bold;
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

const SampleItem = ({ sample }) => (
  <Wrapper>
    <p>
      {sample.name}
      <span>{removeDash(sample.sampleType)}</span>
    </p>
    <ul>
      {sample.parameters.map(({ id, name, testType }) => (
        <>
          <ParameterItem key={id} name={name} testType={testType} />
        </>
      ))}
    </ul>
  </Wrapper>
)

export default SampleItem
