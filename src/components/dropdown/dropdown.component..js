import React from "react"
import OutsideClickHandler from "../../utils/outsideClickHandler"
import styled from "styled-components"

import DefaultDisplayComponent from "./default-display"
import "./dropdown.css"

const DropdownList = styled.div`
  position: absolute;
  z-index: 50;
  background: white;
  border: 1px solid var(--border-color);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  list-style: none;
  top: 100%;
  margin-top: 4px;
  right: 0;
  min-width: 140px;
  &.bottomLeft {
    left: 0;
    right: auto;
  }
  &.bottomRight {
    right: 0;
    left: auto;
  }
  &.topLeft,
  &.topRight {
    left: 0;
    right: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: 4px;
  }
  &.topRight {
    left: auto;
    right: 0;
  }
  & > *:first-child,
  & > *:last-child {
    border-bottom-left-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }
  &.show {
    transition: 0.1s;
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }
`

class Dropdown extends React.Component {
  static defaultProps = {
    className: null,
    listProps: {},
    displayComponentProps: {},
  }

  state = {
    focused: false,
  }

  handleToggleFocus = () => {
    const { focused, displayComponentProps } = this.state
    if (
      displayComponentProps &&
      typeof displayComponentProps.onClick === "function"
    ) {
      displayComponentProps.onClick()
    }
    this.setState({ focused: !focused })
  }

  render() {
    const {
      children,
      className,
      position,
      DisplayComponent,
      ...rest
    } = this.props

    const { focused } = this.state

    return (
      <OutsideClickHandler
        onOutsideClick={focused ? this.handleToggleFocus : null}
        onOutsideScroll={false}
        style={{ position: "relative", display: "inline-block" }}
        {...rest}
      >
        <DefaultDisplayComponent onClick={this.handleToggleFocus} />
        {focused && <DropdownList>{children}</DropdownList>}
      </OutsideClickHandler>
    )
  }
}

export default Dropdown
