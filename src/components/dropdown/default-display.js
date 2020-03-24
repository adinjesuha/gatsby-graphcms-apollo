import React from "react"
import styled from "styled-components"

const DefaultDisplayButton = styled.button`
  background-color: var(--pink-rgba);
  color: var(--pink);
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  width: 30px;
  justify-content: center;
`

const DefaultDisplayComponent = ({ ...rest }) => (
  <DefaultDisplayButton className="defaultDisplayComponent" {...rest}>
    &middot;&middot;&middot;
  </DefaultDisplayButton>
)

export default DefaultDisplayComponent
