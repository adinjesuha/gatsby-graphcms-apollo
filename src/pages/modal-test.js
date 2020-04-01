import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { IoMdClose } from "react-icons/io"
import { Gator } from "../components/modal"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  > svg {
    cursor: pointer;
    color: white;
    font-size: 30px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
`
const ChildWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 620px;
`

const ModalExamplePage = ({ location }) => {
  const [entered, setEntered] = useState(location)
  const handelUnmount = () => {
    setEntered(false)
    setTimeout(() => {
      navigate("/", { state: { noScroll: true } })
    }, 200)
  }
  return (
    <ModalRoutingContext.Consumer>
      {({ modal }) => (
        <Wrapper onClick={handelUnmount}>
          {modal ? (
            <IoMdClose data-testid="modal-close" onClick={handelUnmount} />
          ) : null}

          <ChildWrapper>
            <Gator
              in={entered}
              stopProp={e => e.stopPropagation()}
              sample={location.state.sample}
              company={location.state.otherProps.company}
              correlative={location.state.otherProps.correlative}
              monitoringID={location.state.otherProps.monitoringID}
            />
          </ChildWrapper>
        </Wrapper>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export default ModalExamplePage


