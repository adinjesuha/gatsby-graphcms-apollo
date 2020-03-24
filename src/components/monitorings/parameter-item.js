import React from "react"
import styled from "styled-components"

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 10px 14px;
  span {
    display: block;
    font-size: 14px;
    margin: 0;
    line-height: 1.5;
    &:last-child {
      font-size: 10px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
`

const ParameterItem = ({ name, testType }) => {
  return (
    <Wrapper>
      <span>{name}</span>
      <span>Prueba {testType === "Rapida" ? "Rápida" : "Tradicional"}</span>
    </Wrapper>
  )
}

export default ParameterItem
