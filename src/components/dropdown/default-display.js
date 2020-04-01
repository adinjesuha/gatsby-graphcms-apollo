import React from "react"
import styled from "styled-components"

const DefaultDisplayButton = styled.button`
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
