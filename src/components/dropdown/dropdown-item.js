import React from "react"
import styled from "styled-components"

const DropdownItemWrapper = styled.button`
  border: none;
  border-radius: 0;
  font-size: 0.875rem;
  min-width: 100%;
  min-height: 38px;
  text-align: left;
  height: 2.375rem;
  padding-left: 1.125rem;
  padding-right: 1.125rem;
  font-size: 0.875rem;
  display: block;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
`

const DropdownItem = ({ children, ...rest }) => (
  <DropdownItemWrapper {...rest}>{children}</DropdownItemWrapper>
)

DropdownItem.defaultProps = {
  className: null,
  children: null,
}

export default DropdownItem
