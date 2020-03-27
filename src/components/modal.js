import React from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { useQuery } from "@apollo/react-hooks"

import { Tag } from "./monitorings/tag"
import { IoIosCloseCircle } from "react-icons/io"
import { ALL_PARAMETERS } from "./operations/queries"

const Wrapper = styled.div`
  background: white;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  height: 100%;
  height: 80vh;
  border-radius: 8px;
  &.fadeUp-appear {
    opacity: 0;
  }
  &.fadeUp-enter {
    opacity: 0;
  }
  &.fadeUp-enter-done {
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  &.fadeUp-exit {
    opacity: 1;
  }
  &.fadeUp-exit-active {
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
`

const Header = styled.header`
  padding: 20px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  h3,
  p {
    margin: 0;
  }
`

const Body = styled.div`
  padding: 20px;
  overflow: hidden;
  overflow-y: scroll;
`

const SampleWrapper = styled.div`
  margin-bottom: 20px;
  h4 {
    margin-bottom: 12px;
  }
  button {
    background: #f4f6fa;
    color: #9198ac;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    svg {
      font-size: 16px;
      margin-left: 4px;
    }
    &:hover {
      background: var(--red-rgba);
      color: var(--red);
    }
  }
`

const Sample = ({ monitoringID, sample }) => {
  return (
    <SampleWrapper>
      <h4>Muestra: {sample.name}</h4>
      {sample.parameters.map(parameter => (
        <button>
          {parameter.name}
          <IoIosCloseCircle />
        </button>
      ))}
    </SampleWrapper>
  )
}

const AllParams = ({ sampleID, currentParameters }) => {
  const { loading, error, data } = useQuery(ALL_PARAMETERS)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.error(error)
    return <div>Error!</div>
  }
  let filteredParameters = data.parameters.filter(
    parameter =>
      !currentParameters.find(
        currentParameter => currentParameter.id === parameter.id
      )
  )
  return (
    <div>
      {filteredParameters.map(param => (
        <span>{param.name}</span>
      ))}
    </div>
  )
}

export const Gator = ({ in: inProp, stopProp, monitoring }) => {
  console.log(monitoring)
  return (
    <CSSTransition
      in={inProp}
      timeout={{
        appear: 100,
        enter: 0,
        exit: 300,
      }}
      classNames="fadeUp"
      appear
      unmountOnExit
    >
      <Wrapper onClick={stopProp}>
        <Header>
          <h3>{monitoring.company.name}</h3>
          <Tag className="correlative">{monitoring.correlative}</Tag>
        </Header>
        <Body>
          {monitoring.samples.map(({ id, ...sample }) => (
            <>
              <Sample monitoringID={monitoring.id} sample={sample} />
              <AllParams sampleID={id} currentParameters={sample.parameters} />
            </>
          ))}
        </Body>
      </Wrapper>
    </CSSTransition>
  )
}
