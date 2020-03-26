import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { IoMdClose } from "react-icons/io"

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

const ChildrenComponent = styled.div`
  background: white;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  height: 100%;
  height: 80vh;
  border-radius: 8px;
`

const ModalExamplePage = ({ location }) => (
  <ModalRoutingContext.Consumer>
    {({ modal }) => (
      <Wrapper onClick={() => navigate("/", { state: { noScroll: true } })}>
        {modal ? (
          <IoMdClose
            data-testid="modal-close"
            onClick={() => navigate(`/`, { state: { noScroll: true } })}
          />
        ) : null}

        <ChildWrapper>
          <ChildrenComponent onClick={e => e.stopPropagation()}>
            <h2>{location.state.monitoring.company.name}</h2>
          </ChildrenComponent>
        </ChildWrapper>
      </Wrapper>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalExamplePage
