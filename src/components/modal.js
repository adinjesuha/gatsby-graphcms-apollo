import React from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

import { IoMdClose } from "react-icons/io"

const ModalFade = ({ inProp, duration }) => {
  // const [inProp, setInProp] = useState(false)

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }
  return (
    <Transition in={inProp} timeout={500}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          I'm a fade Transition!
          <IoMdClose
            data-testid="modal-close"
            onClick={() => console.log("hello")}
          />
        </div>
      )}
    </Transition>
  )
}

export default ModalFade
