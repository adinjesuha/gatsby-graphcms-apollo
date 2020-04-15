import React from "react"
import { useMutation } from "@apollo/react-hooks"
import { Button } from "reactstrap"

import { ALL_MONITORINGS } from "./operations/queries"
import { UPDATE_MONITORING_STATE } from "./operations/mutations"

const DoneMonitoring = ({ id, completed, ...otherProps }) => {
  const [toggleCompletedMutation, { loading }] = useMutation(
    UPDATE_MONITORING_STATE,
    {
      variables: { id },
      refetchQueries: [{ query: ALL_MONITORINGS }],
      awaitRefetchQueries: true,
    }
  )
  return (
    <Button 
      disabled={completed || otherProps.percentage < 100}
      color={completed ? "secondary" : "primary"}
      onClick={() => toggleCompletedMutation()}
    >
    {loading ? (
      <React.Fragment>
        <span 
          role="status" 
          className="mr-2 mb-1 spinner-border spinner-border-sm" 
          aria-hidden="true" 
        />
        Procesando...
      </React.Fragment>
    ) : completed ? "Procesado" : "Procesar"}
    </Button>
  )
}

export default DoneMonitoring


