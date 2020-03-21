import React from "react"
import { useMutation } from "@apollo/react-hooks"

import { ALL_MONITORING } from "./operations/queries"
import { TOGGLE_STATE } from "./operations/mutations"

const MakeDone = ({ id, completed, ...otherProps }) => {
  const [toggleCompletedMutation, { loading }] = useMutation(TOGGLE_STATE, {
    variables: { id: id, completed: !completed },
    refetchQueries: [{ query: ALL_MONITORING }],
    awaitRefetchQueries: true,
  })
  return (
    <button
      className={otherProps.classNames}
      onClick={() => toggleCompletedMutation()}
    >
      {loading ? "Completando..." : completed ? "Completado" : "Completar"}
    </button>
  )
}

export default MakeDone
