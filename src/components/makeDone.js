import React from "react"
import { useMutation } from "@apollo/react-hooks"

import { ALL_MONITORINGS } from "./operations/queries"
import { UPDATE_MONITORING_STATE } from "./operations/mutations"

const MakeDone = ({ id, completed, ...otherProps }) => {
  const [toggleCompletedMutation, { loading }] = useMutation(
    UPDATE_MONITORING_STATE,
    {
      variables: { id },
      refetchQueries: [{ query: ALL_MONITORINGS }],
      awaitRefetchQueries: true,
    }
  )
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
